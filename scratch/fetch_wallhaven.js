const fs = require('fs');
const https = require('https');

async function fetchWallhaven(query, categoryName) {
  return new Promise((resolve, reject) => {
    https.get(`https://wallhaven.cc/api/v1/search?q=${query}&categories=111&purity=100&sorting=toplist&order=desc&per_page=15`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          const wallpapers = parsed.data.map(item => ({
            id: item.id,
            url: item.path,
            title: `Aesthetic ${categoryName} ${item.id}`,
            category: categoryName,
            author: 'Wallhaven',
          }));
          resolve(wallpapers);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  try {
    const cars = await fetchWallhaven('cars', 'Cars');
    const landscapes = await fetchWallhaven('landscape', 'Landscapes');
    
    const all = [...cars, ...landscapes];
    
    const content = `export type Category = "All" | "Cars" | "Landscapes";

export interface Wallpaper {
  id: string;
  url: string;
  title: string;
  category: "Cars" | "Landscapes";
  author: string;
}

export const wallpapers: Wallpaper[] = ${JSON.stringify(all, null, 2)};
`;
    
    fs.writeFileSync('./app/data.ts', content);
    console.log('Successfully updated data.ts with Wallhaven wallpapers.');
  } catch (error) {
    console.error('Failed to fetch:', error);
  }
}

main();
