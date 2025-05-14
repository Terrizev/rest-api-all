const exampleResponses = {
  "YouTube Downloader": {
    status: "true",
    result: {
    title: "mie sedap goreng praktis 2000an #food #foodie #kuliner #idejualan",
    thumbnail: "https://i.ytimg.com/vi/H5XVdeoxPtQ/maxresdefault.jpg",
    audio_download: "https://cdn303.savetube.su/download-direct/audio/128/e88fd68469efd77bdb04741c9252bfe1a2de9f2a",
    video_download: "https://cdn304.savetube.su/media/H5XVdeoxPtQ/mie-sedap-goreng-praktis-2000an-food-foodie-kuliner-idejualan-720-ytshorts.savetube.me.mp4",
    audio_format: "mp3",
    video_format: "mp4",
    video_quality: "720p",
    duration: "51"
   }
  },
  "Twitter Downloader": {
    status: "200",
    source: "https://x.com/ytgnoob/status/974637241837355009",
    download_link: "https://dl.snapcdn.app..."
  },
  "Instagram Downloader": {
    status: "error",
    message: "Maaf, endpoint ini sedang error."
  },
  "Facebook Downloader": {
    status: "200",
    source: "https://www.facebook.com/reel/633313599644588?mibextid=rS40aB7S9Ucbxw6v",
    download_link: "https://video-dfw5-2.xx.fbcdn.net..."
  },
  "TikTok Downloader": {
    status: "200",
    source: "https://vt.tiktok.com/ZShRPJfVr/",
    download_links: [
      {
        quality: "HD",
        format: "Unknown",
        url: "https://v16m-default.tiktokcdn.com..."
      }]
  },
  "GitHub Cloning": {
    status: "true",
    repository: "Kwkwkwjwowj/rest-api-all",
    download_url: "https://api.github.com/repos/Kwkwkwjwowj/rest-api-all/zipball",
    filename: "Kwkwkwjwowj-rest-api-all-6221e15.zip"
  },
  "Spotify Downloader": {
status: "true",
    result: {
      title: "Dernière danse",
      artist: "Indila",
      duration_ms: "197142",
      image: "https://i.scdn.co...",
      download: "https://api.fabdl.com/spotify/download-mp3..."
    }
  },
  "Search Groups": {
    status: "200",
    result: [
      {
        title: "🔥𝙍𝙞𝙯-𝙞𝙦 𝙈𝙖𝙧𝙠𝙚𝙩𝙥𝙡𝙖𝙘𝙚🔥",
        thumb: "https://pps.whatsapp.net/v...",
        link: "https://chat.whatsapp.com..."
      }]
  },
  "Random Meme": {
      title: "1cak News",
      imgUrl: "https://1cak.com/posts..."
  },
  "TikTok Search": {
    status: "200",
    title: "windah old💀#windahbasudara",
    video_url: "https://v16m.tiktokcdn.com...",
  },
  "YouTube Search": {
    status: "200",
    result: [
      {
      title: "Kisah Seorang Penyendiri di Jepang - BrokenLore Don't Watch Indonesia",
      author: "MiawAug",
      thumbnail: "https://i.ytimg.com/vi/ac53K1GYlBE/hq720.jpg",
      url: "https://youtube.com/watch?v=ac53K1GYlBE",
      duration: "1:05:02",
      views: "61779"
    }
    ]
  },
  "NPM Search": {
    status: "200",
    result: [
      {
      name: "axios",
      version: "1.9.0",
      description: "Promise based HTTP client for the browser and node.js",
      link: "https://www.npmjs.com/package/axios"
    }
    ]
  },
  "Google Search": {
    status: "200",
    results: [
      {
      title: "MiawAug",
      link: "https://www.youtube.com/channel/UC3J4Q1grz46bdJ7NJLd4DGw",
      snippet: "Popular videos · Gw Udah Siap ke Basement - Hello Neighbor Indonesia (Act 3 #3) · PPAP - Indonesia Cover BY MIAWAUG · Ending Helikopter / Helicopter - Granny ...",
    }
    ]
  },
  "DuckDuckGo Search": {
    status: "error",
    message: "Maaf, endpoint ini sedang error."
  },
  "Pinterest": {
    status: "200",
    results: [
      {
      upload_by: "itssunnyvale",
      caption: "windah senyum Roblox",
      image: "https://i.pinimg.com/originals/38/e1/e7/38e1e7671c6db8842ce55c44a1e8c3a0.jpg",
      source: "https://id.pinterest.com/pin/53198839342371176"
    }
    ]
  },
  "Spotify Search": {
    status: "true",
    result: [
      {
      title: "Dernière danse",
      artist: "Indila",
      duration_ms: "197142",
      link: "https://open.spotify.com/track/5fIZ683j2xPeLAXfHeWKEG",
      image: "https://i.scdn.co/image/ab67616d0000b273d691a8f53f6b487ecbe27cbf"
    }
    ]
  },
  "Genshin Stalk": {
    status: "200",
  uid: "888783721",
  detail_url: "https://enka.network/u/888783721",
  screenshot: "https://mini.s-shot.ru/990x810/PNG/975/Z100/?https://enka.network/u/888783721/",
  info: {
    nickname: "BloxBotz",
    level: "57",
    worldLevel: "8",
    achievement: "632",
    nameCardId: "210219",
    spiralAbyss: "12-1"
  }
  },
  "GitHub Stalk": {
    status: "true",
  code: "200",
  creator: "OwnBlox",
  data: {
    name: "microsoft",
    username: "microsoft",
    followers: "90.7k",
    following: "0",
    repository: "0",
    avatar: "https://avatars.githubusercontent.com/u/1209?s=70&v=4?size=400",
    profile_url: "https://github.com/microsoft"
  }
  },
  "LLaMA 3.3 70B Versatile": {
  status: "200",
  model: "llama-3.3-70b-versatile",
  response: "Hello. How can I help you today?"
  },
  "Gemini AI": {
    sukses: "true",
  jawaban: "Halo juga! 👋😊 Apa kabar? 🔥 Ada yang bisa saya bantu? 😊"
  },
  "Txt2Img": {
    status: "200",
    results: "[ Image ]"
  },
  "Genshin Character Build": {
    status: "200",
    results: "[ Image ]"
  },
  "Screenshot Web": {
    status: "200",
    results: "[ Image ]"
  },
  "Translate": {
  status: "200",
  original_text: "How Are You?",
  translated_text: "Apa kabarmu?",
  lang_from: "en",
  lang_to: "id"
  },
  "Nulis": {
    status: "200",
    results: "[ Image ]"
  },
  "Cuaca": {
  status: "200",
  result: {
    kota: "Jakarta, Indonesia",
    zona_waktu: "GMT +0",
    suhu: "27°C",
    kondisi: "Mostly sunny",
    kelembaban: "87%",
    angin: "1 km/h",
    tekanan: "undefined mb"
  }
  },
  "QR Code Generator": {
    status: "200",
    results: "[ Image ]"
  },
  "Credit Card Generator": {
    type: "Visa",
    name: "Audra Rowe",
    number: "4539008348835948",
    cvv: "950",
    expiry: "08/25"
  },
  "Cek Khodam": {
  status: "200",
  result: "Khodam OwnBlox adalah Siluman Ular Merah penjaga kekayaan dan pelindung dari segala kejahatan ilmu hitam."
  },
  "Tahu Kah Kamu?": {
  status: "200",
  result: "Tahukah kamu? Lumba-lumba tidur dengan satu mata terbuka."
  },
  "Brat Image": {
    status: "200",
    results: "[ Image ]"
  },
  "Quoted Chat": {
    status: "200",
    results: "[ Image ]"
  },
  "Detik News": {
  status: "true",
  source: "https://news.detik.com/",
  result: [
    {
      title: "Ribut-ribut Maut di Asrama Pelaut",
      link: "https://news.detik.com/berita/d-7894123/ribut-ribut-maut-di-asrama-pelaut"
    }
  ]  
  },
  "Kompas": {
    status: "error",
    message: "Maaf, endpoint ini sedang error."
  }
}

const apiData = {
    "Downloader": [
        {
            method: "GET",
            title: "YouTube Downloader",
            status: "online",
            description: "API untuk mendownload video atau shorts dari YouTube.",
            endpoint: "/api/ytdl?url=&type="
        },
        {
            method: "GET",
            title: "Twitter Downloader",
            status: "online",
            description: "API untuk mendownload video atau gambar dari Twitter.",
            endpoint: "/api/twitterdl?url="
        },
        {
            method: "GET",
            title: "Instagram Downloader",
            status: "offline",
            description: "API untuk mendownload video atau gambar dari Instagram.",
            endpoint: "/api/igdl?url="
        },
        {
            method: "GET",
            title: "Facebook Downloader",
            status: "online",
            description: "API untuk mendownload video dari Facebook.",
            endpoint: "/api/fbdl?url="
        },
        {
            method: "GET",
            title: "TikTok Downloader",
            status: "online",
            description: "API untuk mendownload video dari TikTok.",
            endpoint: "/api/ttdl?url="
        },
        {
            method: "GET",
            title: "GitHub Cloning",
            status: "online",
            description: "Cloning repositori dari GitHub.",
            endpoint: "/api/gitclone?url="
        },
        {
            method: "GET",
            title: "Spotify Downloader",
            status: "online",
            description: "Download semua lagu dari Spotify dengan mudah.",
            endpoint: "/api/spotifydl?url="
        }
    ],
    "Search": [
        {
            method: "GET",
            title: "Search Groups",
            status: "online",
            description: "API untuk mencari grup WhatsApp berdasarkan kata kunci.",
            endpoint: "/api/searchgroups?q="
        },
        {
            method: "GET",
            title: "Random Meme",
            status: "online",
            description: "Gambar random yang berisi Meme dan bisa di tentukan count(jumlah) nya.",
            endpoint: "/api/randommeme?count="
        },  
        {
            method: "GET",
            title: "TikTok Search",
            status: "online",
            description: "API untuk mencari video dari TikTok berdasarkan query.",
            endpoint: "/api/ttsearch?q="
        },
        {
            method: "GET",
            title: "YouTube Search",
            status: "online",
            description: "API untuk mencari video dari YouTube berdasarkan kata kunci atau query.",
            endpoint: "/api/ytsearch?q="
        },
        {
            method: "GET",
            title: "NPM Search",
            status: "online",
            description: "Mencari package/module/library yang tersedia berdasarkan query(q) kamu.",
            endpoint: "/api/npmsearch?q="
        },
        {
            method: "GET",
            title: "Google Search",
            status: "online",
            description: "Mencari apapun dan semuanya dari Google dengan cepat.",
            endpoint: "/api/googlesearch?q="
        },
        {
            method: "GET",
            title: "DuckDuckGo Search",
            status: "offline",
            description: "Mencari apapun dan semuanya dari DuckDuckGo dengan mudah.",
            endpoint: "/api/duckduckgo?q="
        },
        {
            method: "GET",
            title: "Pinterest",
            status: "online",
            description: "Mencari gambar di Pinterest berdasarkan query (q) kamu.",
            endpoint: "/api/pinterest?q="
        },
        {
            method: "GET",
            title: "Spotify Search",
            status: "online",
            description: "Mencari lagu dengan informasi lengkap lainnya berdasarkan query (q) kamu.",
            endpoint: "/api/spotifysearch?q="
        }
    ],
    "Stalker": [
        {
            method: "GET",
            title: "Genshin Stalk",
            status: "online",
            description: "Stalking akun genshin berdasarkan UID kamu.",
            endpoint: "/api/gistalk?uid="
        },
        {
            method: "GET",
            title: "GitHub Stalk",
            status: "online",
            description: "Stalking akun GitHub berdasarkan username.",
            endpoint: "/api/githubstalk?username="
        }
    ],      
    "AI": [
        {
            method: "GET",
            title: "LLaMA 3.3 70B Versatile",
            status: "online",
            description: "API untuk mengakses model LLaMA 3.3 70B yang serbaguna.",
            endpoint: "/api/llama-3.3-70b-versatile?content="
        },
        {
            method: "GET",
            title: "Gemini AI",
            status: "online",
            description: "API untuk mengakses AI model Gemini yang serbaguna.",
            endpoint: "/api/gemini?text="
        },
        {
            method: "GET",
            title: "Txt2Img",
            status: "online",
            description: "API untuk membuat gambar dari AI dengan style yang banyak.",
            endpoint: "/api/txt2img?prompt=&style="
        }
    ],
    "Tools": [
        {
            method: "GET",
            title: "Genshin Character Build",
            status: "online",
            description: "Build karakter Genshin Impact yang lengkap berdasarkan query (q) kamu.",
            endpoint: "/api/genshinbuild?q="
        },
        {
            method: "GET",
            title: "Screenshot Web",
            status: "online",
            description: "API untuk screenshot website dengan mudah.",
            endpoint: "/api/ssweb?url="
        },
        {
            method: "GET",
            title: "Translate",
            status: "online",
            description: "API untuk translate bahasa apapun menjadi yang kamu inginkan.",
            endpoint: "/api/translate?text=&to="
        },
        {
            method: "GET",
            title: "Nulis",
            status: "online",
            description: "Membuat gambar buku beserta tulisan berdasarkan dari query text kamu.",
            endpoint: "/api/nulis?text="
        },
        {
            method: "GET",
            title: "Cuaca",
            status: "online",
            description: "Mendapatkan informasi Cuaca semua kota di dunia berdasarkan query kota.",
            endpoint: "/api/cuaca?kota="
        },
        {
            method: "GET",
            title: "QR Code Generator",
            status: "online",
            description: "Membuat QR secara otomatis dengan gampang.",
            endpoint: "/api/qrcodegenerator?text="
        },
        {
            method: "GET",
            title: "Credit Card Generator",
            status: "online",
            description: "Fake generator Credit Card hanya untuk Fun",
            endpoint: "/api/vcc?type=&count="
        }
    ],
    "Fun": [
        {
            method: "GET",
            title: "Cek Khodam",
            status: "online",
            description: "Permainan seru yang menunjukkan khodam seseorang berdasarkan nama.",
            endpoint: "/api/cekkhodam?nama="
        },
        {
            method: "GET",
            title: "Tahu Kah Kamu?",
            status: "online",
            description: "Permainan seru yang menunjukkan fakta2 random yang mungkin belom kamu ketahui.",
            endpoint: "/api/tahukahkamu"
        }
    ],
    "Sticker": [
        {
            method: "GET",
            title: "Brat Image",
            status: "online",
            description: "Mengubah text kamu menjadi gambar brat.",
            endpoint: "/api/brat?text="
        },
        {
            method: "GET",
            title: "Quoted Chat",
            status: "online",
            description: "Membuat gambar dengan desain quoted chat yang bisa kamu custom nama, color, foto profile, dan lainnya.",
            endpoint: "/api/qc?text=&name=&color=&profile="
        }
    ],
    "Berita": [
        {
            method: "GET",
            title: "Detik News",
            status: "online",
            description: "Mendapatkan informasi berita terbaru dari Detik News.",
            endpoint: "/api/detiknews"
        },
        { 
            method: "GET",
            title: "Kompas",
            status: "offline",
            description: "Mendapatkan informasi berita terbaru dari Kompas",
            endpoint: "/api/kompasnews"
        }
    ]      
};

function syntaxHighlight(json) {
    if (typeof json !== 'string') {
        json = JSON.stringify(json, null, 2);
    }
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
        let cls = 'number';
        if (/^"/.test(match)) {
            cls = match.endsWith(':') ? 'key' : 'string';
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return `<span class="${cls}">${match}</span>`;
    });
}

let currentlyOpenItem = null;

function setupTryItFeature(apiItem, endpoint) {
    const tryItBtn = document.createElement('button');
    tryItBtn.className = 'try-it-btn';
    tryItBtn.innerHTML = '<i class="fas fa-bolt"></i> Try It';
    
    const testerContainer = document.createElement('div');
    testerContainer.className = 'tester-container';
    
    testerContainer.innerHTML = `
        <div class="tester-controls">
            <select class="tester-method">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
            </select>
            <input type="text" class="tester-url" value="${endpoint}" placeholder="Add parameters...">
            <button class="send-btn"><i class="fas fa-paper-plane"></i> Send</button>
        </div>
        <div class="tester-result">
            <div class="response-status"></div>
            <pre class="response-output">Response will appear here...</pre>
        </div>
    `;
    
    const buttonContainer = apiItem.querySelector('.api-button-container');
    buttonContainer.appendChild(tryItBtn);
    apiItem.querySelector('.api-description').appendChild(testerContainer);
    
    tryItBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        testerContainer.classList.toggle('active');
    });
    
    testerContainer.querySelector('.send-btn').addEventListener('click', async () => {
        const method = testerContainer.querySelector('.tester-method').value;
        let url = testerContainer.querySelector('.tester-url').value;
        const output = testerContainer.querySelector('.response-output');
        const statusEl = testerContainer.querySelector('.response-status');
        
        if (!url.startsWith('http') && !url.startsWith('/')) {
            url = '/' + url;
        }
        
        output.innerHTML = '<span class="loading-text">Sending request...</span>';
        statusEl.textContent = '';
        statusEl.className = 'response-status';
        
        try {
            const startTime = Date.now();
            const response = await fetch(url, { method });
            const responseTime = Date.now() - startTime;
            
            statusEl.textContent = `${response.status} ${response.statusText} �� ${responseTime}ms`;
            statusEl.classList.add(response.ok ? 'status-success' : 'status-error');
            
            const data = await response.json();
            output.innerHTML = syntaxHighlight(data);
        } catch (error) {
            statusEl.textContent = `Error: ${error.message}`;
            statusEl.classList.add('status-error');
            output.textContent = '';
        }
    });
}

function createApiItem(api) {
    const apiItem = document.createElement('div');
    apiItem.className = 'api-item';
    
    const apiHeader = document.createElement('div');
    apiHeader.className = 'api-header';
    
    apiHeader.innerHTML = `
        <span class="api-method">${api.method}</span>
        <span class="api-title">${api.title}</span>
        <span class="api-status-badge ${api.status}">${api.status.toUpperCase()}</span>
    `;
    
    const apiDescription = document.createElement('div');
    apiDescription.className = 'api-description';
    apiDescription.style.display = 'none';
    
    apiDescription.innerHTML = `
        <p>${api.description}</p>
        <div class="api-endpoint">Endpoint: ${api.endpoint}</div>
        <div class="api-button-container">
            <button class="access-btn"><i class="fas fa-external-link-alt"></i> Access</button>
            <button class="copy-btn"><i class="far fa-copy"></i> Copy</button>
        </div>
    `;
    
    apiItem.appendChild(apiHeader);
    apiItem.appendChild(apiDescription);
    
    setupTryItFeature(apiItem, api.endpoint);
    
    apiDescription.querySelector('.access-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(api.endpoint, '_blank');
    });
    
    apiDescription.querySelector('.copy-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(api.endpoint)
            .then(() => alert('Endpoint copied to clipboard!'))
            .catch(err => console.error('Copy failed:', err));
    });
    
    apiHeader.addEventListener('click', function(e) {
        if (e.target.closest('.try-it-btn, .api-status-badge')) return;
        
        if (currentlyOpenItem && currentlyOpenItem !== this.nextElementSibling) {
            currentlyOpenItem.style.display = 'none';
        }
        
        const description = this.nextElementSibling;
        description.style.display = description.style.display === 'none' ? 'block' : 'none';
        currentlyOpenItem = description.style.display === 'block' ? description : null;
    });
    
    return apiItem;
}

function updateStatistics() {
    let total = 0, online = 0, offline = 0;
    
    for (const category in apiData) {
        apiData[category].forEach(api => {
            total++;
            api.status === 'online' ? online++ : offline++;
        });
    }
    
    document.getElementById('total-endpoints').textContent = total;
    document.getElementById('online-endpoints').textContent = online;
    document.getElementById('offline-endpoints').textContent = offline;
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', () => {
        const term = searchInput.value.toLowerCase();
        
        document.querySelectorAll('.api-item').forEach(item => {
            const title = item.querySelector('.api-title').textContent.toLowerCase();
            const desc = item.querySelector('.api-description p').textContent.toLowerCase();
            item.style.display = (title.includes(term) || desc.includes(term)) ? 'block' : 'none';
        });
        
        document.querySelectorAll('.api-category').forEach(category => {
            const hasVisible = category.querySelector('.api-item[style="display: block;"]');
            category.style.display = hasVisible ? 'block' : 'none';
        });
    });
}

function setupCategoryMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const categoryPanel = document.querySelector('.category-panel');
    const closeBtn = document.querySelector('.close-btn');
    const categoryList = document.querySelector('.category-list');
    
    for (const category in apiData) {
        const link = document.createElement('a');
        link.className = 'category-link';
        link.href = `#${category}`;
        link.textContent = category;
        link.onclick = () => categoryPanel.classList.remove('active');
        categoryList.appendChild(link);
    }
    
    menuBtn.addEventListener('click', () => {
        categoryPanel.classList.toggle('active');
    });
    
    closeBtn.addEventListener('click', () => {
        categoryPanel.classList.remove('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!categoryPanel.contains(e.target) && !menuBtn.contains(e.target)) {
            categoryPanel.classList.remove('active');
        }
    });
}

function setupThemeToggle() {
    const switchContainer = document.createElement('div');
    switchContainer.className = 'theme-switch-container';
    switchContainer.innerHTML = `
        <label class="theme-switch">
            <input type="checkbox" id="theme-toggle">
            <span class="slider">
                <i class="fas fa-sun icon sun-icon"></i>
                <i class="fas fa-moon icon moon-icon"></i>
            </span>
        </label>
    `;
    document.body.appendChild(switchContainer);
    
    const themeToggle = document.getElementById('theme-toggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    }
    
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('darkMode', 'false');
        }
    });
}

function loadApiData() {
    const apiCategoriesContainer = document.getElementById('api-categories');
    
    for (const category in apiData) {
        const apiCategory = document.createElement('div');
        apiCategory.className = 'api-category';
        apiCategory.id = category;
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        
        const apiList = document.createElement('div');
        apiList.className = 'api-list';
        
        apiData[category].forEach(api => {
            apiList.appendChild(createApiItem(api));
        });
        
        apiCategory.appendChild(categoryTitle);
        apiCategory.appendChild(apiList);
        apiCategoriesContainer.appendChild(apiCategory);
    }
    
    setupCategoryMenu();
    setupSearch();
    updateStatistics();
}

document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    loadApiData();
});