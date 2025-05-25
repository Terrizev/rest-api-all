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
            title: "Tweet Generator",
            status: "online",
            description: "Membuat gambar fake tweet dan bisa custom seperti Avatar, Like, Replies, Retweets dll."
            endpoint: "/api/tweet?text=&displayName=&sender=&avatar=&replies=&retweets=&likes="
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

let currentlyOpenItem = null;

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

// Perbarui fungsi setupTryItFeature
function setupTryItFeature(apiItem, endpoint, title) {
    const tryItBtn = document.createElement('button');
    tryItBtn.className = 'try-it-btn';
    tryItBtn.innerHTML = '<i class="fas fa-flask"></i> Try It';
    
    // Tempatkan tombol di description
    const buttonContainer = apiItem.querySelector('.api-button-container');
    buttonContainer.appendChild(tryItBtn);

    tryItBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openApiModal(endpoint, title);
    });
}

// Fungsi untuk membuka modal
function openApiModal(endpoint, title) {
    const modal = document.getElementById('apiModal');
    const modalTitle = document.getElementById('modalTitle');
    const testerUrl = modal.querySelector('.tester-url');
    const responseContent = modal.querySelector('.response-content');
    
    // Reset modal state
    modalTitle.textContent = title;
    testerUrl.value = endpoint;
    responseContent.innerHTML = '';
    modal.querySelector('.response-status').textContent = '';
    modal.querySelector('.response-time').textContent = '';
    modal.querySelector('.loading-indicator').style.display = 'none';
    
    modal.classList.add('active');
}

// Inisialisasi modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('apiModal');
    
    // Close modal
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close ketika klik di luar modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Send request handler
    modal.querySelector('.send-btn').addEventListener('click', async () => {
        const method = modal.querySelector('.tester-method').value;
        const url = modal.querySelector('.tester-url').value;
        const responseStatus = modal.querySelector('.response-status');
        const responseTime = modal.querySelector('.response-time');
        const responseContent = modal.querySelector('.response-content');
        const loadingIndicator = modal.querySelector('.loading-indicator');

        // Reset dan tampilkan loading
        responseContent.innerHTML = '';
        responseStatus.textContent = '';
        responseTime.textContent = '';
        loadingIndicator.style.display = 'flex';

        try {
            const startTime = Date.now();
            const response = await fetch(url, { 
                method,
                headers: { 'Accept': 'application/json, image/*' }
            });
            const responseTimeMs = Date.now() - startTime;

            // Update metadata
            responseTime.textContent = `${responseTimeMs}ms`;
            responseStatus.textContent = `${response.status} ${response.statusText}`;
            responseStatus.className = `response-status ${response.ok ? 'status-success' : 'status-error'}`;

            // Handle response content
            const contentType = response.headers.get('content-type') || '';
            
            if (contentType.includes('application/json')) {
                const data = await response.json();
                responseContent.innerHTML = `<pre>${syntaxHighlight(data)}</pre>`;
            } 
            else if (contentType.includes('image')) {
                const blob = await response.blob();
                const imgUrl = URL.createObjectURL(blob);
                responseContent.innerHTML = `
                    <div class="image-response">
                        <img src="${imgUrl}" class="api-image-response">
                        <button class="download-btn">
                            <i class="fas fa-download"></i> Download Image
                        </button>
                    </div>
                `;
                
                // Add download handler
                responseContent.querySelector('.download-btn').addEventListener('click', () => {
                    const a = document.createElement('a');
                    a.href = imgUrl;
                    a.download = `download-${Date.now()}.${blob.type.split('/')[1]}`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                });
            }
            else {
                const text = await response.text();
                responseContent.textContent = text;
            }
        } catch (error) {
            responseStatus.textContent = `Error: ${error.message}`;
            responseStatus.className = 'response-status status-error';
        } finally {
            loadingIndicator.style.display = 'none';
        }
    });
});

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
    
    setupTryItFeature(apiItem, api.endpoint, api.title);
    
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
    
    if (!apiData) {
        console.error('apiData is not defined!');
        return;
    }
    
    apiCategoriesContainer.innerHTML = '';
    
    const loadPromises = Object.keys(apiData).map(category => {
        return new Promise(resolve => {
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
            
            setTimeout(resolve, 50);
        });
    });
    
    Promise.all(loadPromises).then(() => {
        setupCategoryMenu();
        setupSearch();
        updateStatistics();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    document.querySelector('.container').style.visibility = 'hidden';
    
    setupThemeToggle();
    
    setTimeout(() => {
        loadApiData();
        
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            document.querySelector('.container').style.visibility = 'visible';
            
            loadingScreen.addEventListener('transitionend', () => {
                loadingScreen.remove();
            });
        }, 500);
    }, 100);
});