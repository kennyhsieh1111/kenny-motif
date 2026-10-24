/* Clone additions: language (zh / en) and theme (light / dark).
   Loaded in <head> before the stylesheet so the theme is right on first paint.
   English works as an exact-match dictionary: data objects are translated in place before the
   page renders them, and a MutationObserver translates the static HTML text as it is parsed.
   ponytail: switching language reloads the page instead of re-rendering; the original render code is untouched. */
(function(){
let lang=null,theme=null;
try{lang=localStorage.getItem('motif-lang');theme=localStorage.getItem('motif-theme')}catch(e){}
const q=new URLSearchParams(location.search);if(q.get('lang'))lang=q.get('lang');if(q.get('theme'))theme=q.get('theme'); /* ?lang=en&theme=dark overrides, for sharing a view */
if(lang!=='en'&&lang!=='zh')lang=/^zh/i.test(navigator.language||'')?'zh':'en';
if(theme!=='dark'&&theme!=='light')theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
const H=document.documentElement;
H.lang=lang==='en'?'en':'zh-Hant-TW';H.dataset.theme=theme;

const EN={
/* ---- chrome / static ---- */
'肯尼計畫《動機 MOTIF》feat. 阿問｜AD Cafe':"Kenny Project “MOTIF” feat. A-Wen｜AD Cafe",
'肯尼計畫':"Kenny Project",'菜單':"Menu",'後援品牌':"Partners",'契機':"Story",'交響曲':"Symphonies",
'AD Cafe 官網首頁':"AD Cafe home",'AD Cafe 官網':"AD Cafe website",'回到菜單':"Back to menu",'頁面分頁':"Page tabs",
'《動機':"“",'》':"”",'活動契機 ›':"Why this event ›",
'｜2026 WCIGS 世界咖啡烈酒大賽亞軍':"｜Runner-up, 2026 World Coffee in Good Spirits",
'2026 WCIGS 世界咖啡烈酒大賽亞軍':"Runner-up, 2026 World Coffee in Good Spirits Championship",
'全品項無酒精':"All alcohol-free",'免預約・現場排隊':"No booking · walk-in queue",'可內用・可外帶':"Dine-in or takeaway",
'調飲的動機，決定品味的維度':"The motive behind a drink sets the dimension of taste",
'點擊照片裡的任一杯、或下方清單中的品項，看飲品的完整介紹。':"Tap any cup in the photo, or an item in the list below, for the full story of each drink.",
'十杯客座調飲的合照':"Group photo of the ten guest drinks",'照片為示意圖':"Photo for illustration",
'顯示所有杯名':"Show all names",'隱藏杯名':"Hide names",
'飲品':"Drinks",'小點':"Bites",'每一站的小點都不一樣，依場次列出。':"The bites differ at every stop, listed by venue.",
'篩選飲品':"Filter drinks",'往左看更多篩選':"Scroll filters left",'往右看更多篩選':"Scroll filters right",
'奠定飲品基底結構':"Building the base of every drink",
'咖啡特調、或任何無酒精調飲，在翻轉調酒架構時移除了酒精帶來的香氣、口感和複雜度，更需要建立好的基底。這一場客座不只是限量活動、更像是一場快閃店壓力測試 DEMO。':"Coffee signatures, and any alcohol-free drink, lose the aroma, texture and complexity that alcohol brings once the cocktail structure is flipped, so a good base matters even more. This guest run isn't just a limited event; it's more like a pop-up stress-test demo.",
'我們的整套菜單想滿足不可能的三角：風味有重點又能品味層次、跨越時間場地都能完美複刻、進場營業到撤場的流程最簡化──沒有這次跨界的後援品牌們，這次活動無法發生。':"Our whole menu tries to satisfy an impossible triangle: flavour with focus yet layers to savour, perfect replication across time and venues, and the simplest possible flow from setup to teardown. Without the cross-industry supporting brands, this event could not have happened.",
'後援':"Supporters",
'貪，開拓了品味的疆域；':"Craving expands the territory of taste;",
'探索風味彷彿是個癮頭，曾經驚艷的歸為日常，驅策我們尋覓下一個寶藏。這一次的《肯尼計畫》，我們貪的是不同的「動機」。':"Exploring flavour feels like an addiction: what once amazed becomes everyday, driving us to seek the next treasure. In this Kenny Project, what we crave is different 'motives'.",
'AD Cafe 邀請到 2026 世界咖啡烈酒大賽亞軍阿問，在走過比賽、走過實驗、走過日常之後，與北中南指標性的獨立咖啡館一起碰撞，把調飲的各種動機拆解、轉化，再呈現出來。':"AD Cafe invited A-Wen, runner-up of the 2026 World Coffee in Good Spirits Championship, to collide with landmark independent cafés across northern, central and southern Taiwan after competitions, experiments and daily routine, taking apart, transforming and re-presenting the many motives behind mixed drinks.",
'──我們認為':"── We believe",'動機，決定了品味的維度。':"Motive sets the dimension of taste.",
'動機的分岔':"Where motives fork",'啟動':"Initiators",'落點':"Venues",
'AD Cafe 阿迪與木木':"AD Cafe's Adi and Mumu",'AD Cafe｜阿迪 × 木木':"AD Cafe｜Adi × Mumu",
'台灣精品咖啡文化影響力品牌':"An influential voice in Taiwan's specialty coffee culture",
'多年來透過影音、圖文和實體活動，成為建立品味文化的引路人。咖啡是重要的生活儀式，而味覺沒有標準答案，更重要的是探索自己的喜好、錨定個人的品味。':"For years, through video, writing and live events, they have guided people in building a culture of taste. Coffee is an important daily ritual, and there is no standard answer in flavour; what matters is exploring your own preferences and anchoring your personal taste.",
'《貪杯》是我們的客座企劃，代表企劃還包括個性化聯名咖啡 I 人《默默》與 E 人《煦煦》，並發起《遍地開花全台串聯計畫》。':"Kenny Project is our guest series; sister projects include the personality-based collaboration coffees Momo (for introverts) and Xuxu (for extroverts), and the island-wide Blooming Everywhere collaboration.",
'阿問在 2026 WCIGS 世界賽舞台上':"A-Wen on the 2026 WCIGS world stage",
'城市峽谷｜「阿問」 吳柄頡 Sion Wu':"Urban Canyon｜Sion Wu, “A-Wen”",
'台灣近年最受矚目的咖啡調酒師之一，拿下四屆（2019、2020、2022、2025）TCIGS 台灣咖啡調酒大賽冠軍。以精準的風味拆解與重組聞名，獨創「杯測表 × 風味輪」調飲研發系統。':"One of Taiwan's most watched coffee bartenders in recent years, four-time champion (2019, 2020, 2022, 2025) of the Taiwan Coffee in Good Spirits Championship. Known for precise flavour deconstruction and recombination, he created a “cupping form × flavour wheel” drink development system.",
'今年帶著木木一同在世界舞台上奪得佳績，他重新演繹台灣經典的風味意象：珍珠多多綠、鳳梨酥，甚至是小籠包。這是他拿下世界亞軍後，第一次在台灣北中南巡迴客座。':"This year, with Mumu alongside, he placed on the world stage by reinterpreting classic Taiwanese flavour images: pearl yogurt green tea, pineapple cake, even xiaolongbao. This is his first guest tour across Taiwan since becoming world runner-up.",
'謝謝你，來多貪一杯':"Thank you for coming for one more cup",
'每一杯背後，都有一個想被理解的瞬間。如果今天有哪一口讓你若有所思，歡迎把那個瞬間留下來，也可以標記我們。每一則分享我們都會認真閱讀回覆，這場活動中合力的每一位夥伴也同樣期待與你交流。':"Behind every cup is a moment waiting to be understood. If a sip today gave you pause, feel free to capture that moment and tag us. We read and reply to every post, and every partner in this event is just as eager to hear from you.",
'複製所有標記':"Copy all tags",'回 AD Cafe 官網首頁 ›':"Back to AD Cafe ›",
'AD Cafe 主辦｜肯尼計畫《動機 MOTIF》feat. 阿問':"Hosted by AD Cafe｜Kenny Project “MOTIF” feat. A-Wen",
'飲品照片為示意圖，實際出杯以現場為準。':"Drink photos are for illustration; actual serves may vary.",
'上一項':"Previous",'下一項':"Next",'關閉':"Close",
/* ---- labels written by the render code ---- */
'今天':"Today",'不含咖啡':"No coffee",'阿迪手沖單品':"Adi's pour-over",'研發動機：':"Motive: ",'研發動機':"Motive",
'收藏':"Save",'已收藏':"Saved",'已複製':"Copied",'看 9 種口味 ›':"See 9 flavours ›",'看介紹 ›':"Details ›",
'還沒有收藏的飲品。按飲品右下角的愛心，就會出現在這裡。':"No favourites yet. Tap the heart on a drink and it will show up here.",
'沒有符合的飲品。':"No matching drinks.",
'調飲提案':"Used in",'研發時為什麼選它':"Why we chose it",'品牌介紹':"About the brand",'Instagram：':"Instagram: ",'聯絡方式：':"Contact: ",'即將更新':"Coming soon",
'獨立咖啡廳':"Independent cafés",
'因為有我的經歷、我的知識、我的品味，所以在這個時間點，這樣的風味展現了我之所以是我，然後尋求與你的共鳴與平衡。':"Because of my experience, my knowledge and my taste, at this point in time this flavour shows why I am who I am, and then seeks resonance and balance with you.",
'大眾餐飲':"Mass-market F&B",
'科學化的數據優先於人的獨特性，由市場主導策略。例如奶茶，要有奶有茶、要好量產，飲料不一定是廉價的，但一定是好懂的。我們以大家熟悉的品項出發，選用好一點的原料稍微改良。':"Scientific data takes priority over individual uniqueness, and strategy is led by the market. Milk tea, for example, needs milk and tea and must scale well; a drink needn't be cheap, but it must be easy to understand. We start from items everyone knows and tweak them with slightly better ingredients.",
'調飲':"Mixed drinks",'單品咖啡':"Single-origin coffee",'開啟地圖 ›':"Open map ›",
'讀完整故事':"Read the full story",'使用原料':"Ingredients",'其他：':"Also: ",
'左右滑動可以看上一杯、下一杯':"Swipe left or right for the previous or next drink",'實拍':"Actual photo",
'口味依當天甜點櫃陳列為準。':"Flavours depend on the day's dessert counter.",'、':", ",'場地介紹':"About the venue",'為什麼選它':"Why we chose it",
/* ---- venues ---- */
'台北':"Taipei",'台南':"Tainan",'台中':"Taichung",'五':"Fri",'六':"Sat",'日':"Sun",'一':"Mon",
'LOOP IN NEON 霓裡':"LOOP IN NEON",'霓裡':"LOOP IN NEON",
'台北市大同區延平北路一段 62 號':"No. 62, Sec. 1, Yanping N. Rd., Datong Dist., Taipei",
'位於大稻埕、緊鄰北車的地段，冷冽的金屬材質包覆著老屋既有的蛇紋石地磚。老闆們把過去的風味經驗揉進菜單，希望透過多維度的咖啡體驗，和大家一起感受霓虹般多彩的味覺世界。店內的季節菜單極具整體性，每款品項都展現細緻而平衡的調性。':"Set in Dadaocheng, a short walk from Taipei Main Station, where cool metal surfaces wrap around the old house's original serpentine floor tiles. The owners fold their past flavour experiences into the menu, hoping a multi-dimensional coffee experience lets everyone taste a world as colourful as neon. The seasonal menu is remarkably cohesive, with every item showing a refined, balanced tone.",
'台南市中西區南寧街 83 巷 9 號':"No. 9, Ln. 83, Nanning St., West Central Dist., Tainan",
'台南中西區一棟富有文化氣息的老宅，以清水模、黑鐵與木質交織出沉靜內斂的日式氣息。這裡早已不只是一間咖啡廳，更像一個藝文聚落，展覽、生活美學課程都在這裡自然發生，推廣的正是精品咖啡與生活儀式的共生。':"A culturally rich old house in Tainan's West Central District, where fair-faced concrete, black iron and wood weave a quiet, understated Japanese air. It has long been more than a café: it's an arts hub where exhibitions and lifestyle classes happen naturally, promoting the symbiosis of specialty coffee and everyday ritual.",
'Phase Coffee Roasters × 碧月':"Phase Coffee Roasters × Biyue",'Phase 勤美':"Phase · CMP",
'台中市西區館前路 79 號（勤美術館一樓）':"No. 79, Guanqian Rd., West Dist., Taichung (1F, CMP Block Museum of Arts)",
'Phase 一直在做的，是把專業轉化為日常：把複雜的產區背景、處理法與風味結構，拆解成清晰的層次，讓高品質的感官體驗自然融入生活的節奏。一起開發咖啡豆和飲品的過程中，他們是我們最信任的後援。':"What Phase has always done is turn expertise into everyday life: breaking complex origin backgrounds, processing methods and flavour structures into clear layers, so high-quality sensory experiences slip naturally into the rhythm of daily life. Through developing beans and drinks together, they are the backup we trust most.",
/* ---- sponsors ---- */
'Liquid Ark 澄清果汁與調飲':"Liquid Ark clarified juices and drinks",'LINE 官方帳號':"LINE official account",'澄清果汁':"Clarified juice",
'以萃取技術提供透明度佳、風味飽滿的高品質澄清果汁，為客座飲品帶來穩定的基底！':"High-quality clarified juices with great clarity and full flavour, made with extraction technology, giving the guest menu a stable base!",
'澄清果汁把果肉和雜質濾掉，留下果香和酸甜，顏色透亮、口感乾淨。對研發來說，最大的好處是穩定：每一瓶風味一致，不用在現場榨汁、過濾，出杯快，也不會因為果肉讓口感變重。Play Gum 那種透光的紫、黃昏線杯底那層明亮的鳳梨色，都是靠它做出來的。':"Clarified juice filters out pulp and impurities, keeping the aroma and the sweet-sour balance, with a clear colour and a clean mouthfeel. For R&D the biggest benefit is consistency: every bottle tastes the same, there's no juicing or filtering on site, drinks go out fast, and the body never turns heavy from pulp. Play Gum's translucent purple and the bright pineapple layer at the bottom of Twilight Line are both made with it.",
'以萃取技術提供透明度佳、風味飽滿的高品質澄清果汁，減輕店家製作負擔，也提供調飲開發顧問服務。品牌標語是「The less you see, the more you taste」。':"Uses extraction technology to supply high-quality clarified juices with great clarity and full flavour, easing the workload for shops, and also offers drink development consulting. Their tagline: “The less you see, the more you taste”.",
'芳時品味 CARL JUNG 與 NEMA':"Fancy Food: CARL JUNG and NEMA",'芳時品味':"Fancy Food",'無酒精風味蒸餾液・脫醇葡萄酒':"Non-alcoholic flavour distillates · De-alcoholised wine",
'專門進口歐美頂級飲品，無酒精白酒和琴酒蒸餾液，根本是特調作弊神器。':"Importer of top-tier European and American drinks: non-alcoholic white wine and gin distillates that are basically a cheat code for signature drinks.",
'全品項無酒精，但我們還是想要調酒的基礎結構。CARL JUNG 卡爾榮格脫醇白酒保留了葡萄酒的酸度和骨架，霓裡的變奏曲靠它把白葡萄推向更多層次。NEMA 的風味蒸餾液香氣很足、但沒有酒體，只需要少量（大約 5-10ml）做為畫龍點睛的素材，這次分別選用標準琴酒、艾碧斯、老湯姆不同的香氣調性銜接不同的飲品主調。':"Everything is alcohol-free, but we still wanted the basic structure of a cocktail. CARL JUNG de-alcoholised white wine keeps the acidity and backbone of wine, and LOOP IN NEON's Variation leans on it to push white grape into more layers. NEMA's flavour distillates are intensely aromatic yet have no body, so only a small amount (around 5–10 ml) is needed as the finishing touch. This time we chose the standard gin, absinthe and Old Tom profiles to bridge the different drinks' main themes.",
'引進歐美頂級飲品的代理商。CARL JUNG 卡爾榮格於 1907 年發明「減壓蒸餾脫醇」技術，在低溫下去除酒精、保留葡萄酒的風味，並以香氣回填系統把香氣留住。NEMA 誕生於 2018 年，是日本第一款無酒精琴酒，由日本花式調酒協會創辦會長監製，以無農藥栽種的玫瑰等植物素材、八岳山麓的湧水手工製作，完全不含酒精。':"An importer of premium European and American drinks. In 1907 CARL JUNG invented the vacuum-distillation de-alcoholisation process, removing alcohol at low temperature while preserving the wine's flavour, with an aroma-recovery system to keep the bouquet. NEMA, born in 2018, is Japan's first non-alcoholic gin, supervised by the founding president of the Japan Flair Bartenders' Association and hand-crafted from pesticide-free roses and other botanicals with spring water from the foothills of Mt. Yatsugatake. Completely alcohol-free.",
'鮮乳坊 A2β 酪蛋白鮮乳與調飲':"Better Milk A2β casein fresh milk and drinks",'至合作夥伴頁面，填寫最下方的聯絡表單':"Partner page, contact form at the bottom",'鮮乳坊':"Better Milk",'A2β 酪蛋白鮮乳':"A2β casein fresh milk",
'單一乳源、獸醫把關的高品質鮮乳，從繁殖育種到基因檢測把關，打造全台首罐 A2β 酪蛋白鮮乳。':"High-quality single-source milk overseen by veterinarians, with breeding and genetic testing all under control: Taiwan's first A2β casein fresh milk.",
'乳香乾淨、甜感自然，打發之後泡沫細緻又撐得住。四季那層像舒芙蕾的白色口感、鴛鴦咖啡拿鐵的醇厚，都是靠它。單一乳源也讓每一批的風味更一致，研發時抓好的比例，到了現場一樣準。':"Clean dairy aroma, natural sweetness, and a fine foam that holds after frothing. The soufflé-like white layer on The Four Seasons and the richness of the Coffee Milk Tea both rely on it. A single source also keeps every batch consistent, so the ratios we nailed in development stay just as accurate on site.",
'2015 年由大動物獸醫師透過群眾集資成立，堅持單一乳源、獸醫把關。A2β 酪蛋白鮮乳是鮮乳坊和彰化豐樂牧場耗時三年打造的台灣第一瓶 A2β 酪蛋白鮮乳，從繁殖管理、育種規劃到基因檢測都把關，A2 乳牛獨立飼養、以單一管線與桶槽儲存。':"Founded in 2015 by a large-animal veterinarian through crowdfunding, committed to single-source milk under veterinary supervision. The A2β casein milk took Better Milk and Fengle Farm in Changhua three years to create as Taiwan's first A2β casein fresh milk, with breeding management, planning and genetic testing all controlled; the A2 cows are raised separately and stored through dedicated lines and tanks.",
'Captain 糖漿與 Fever-Tree 通寧水':"Captain syrups and Fever-Tree tonic water",'沂源':"DIP Specialists",'Captain 糖漿・Fever-Tree 通寧水':"Captain syrups · Fever-Tree tonic water",
'引進獨特、有趣又受歡迎的酒與基底，細緻的氣泡水和高濃縮天然糖漿！':"Importing distinctive, fun and popular spirits and bases: fine sparkling water and highly concentrated natural syrups!",
'Captain 糖漿用日本水果果汁和果泥做成，濃縮度高，稀釋四倍後風味還是很清楚。做特調的時候，一點點就能給出明確的水果輪廓，不會只剩甜。Fever-Tree 接骨木花通寧水的花香細緻、微甜，剛好平衡奎寧的苦，是 Play Gum 氣泡感的來源。':"Captain syrups are made from Japanese fruit juice and purée, so concentrated that the flavour stays clear even diluted four times. In a signature drink a little gives a distinct fruit outline instead of just sweetness. Fever-Tree Elderflower Tonic's delicate floral note and slight sweetness balance the bitterness of quinine, and it's where Play Gum gets its fizz.",
'沂源成立於 2018 年，引進獨特、有趣又受歡迎的酒類與 Mixer，品牌理念是「DIP INTO GOOD LIFE」。Captain 船長糖漿來自大阪中村商店，1935 年創立至今 90 年，長期被酒吧、咖啡廳指定使用。Fever-Tree 於 2005 年在英國創立，全部使用天然原料，核心理念是「If ¾ of your drink is the mixer, mix with the best.」':"Founded in 2018, DIP imports distinctive, fun and popular spirits and mixers under the motto “DIP INTO GOOD LIFE”. Captain syrups come from Nakamura Shoten in Osaka, founded in 1935 and trusted by bars and cafés for 90 years. Fever-Tree was founded in the UK in 2005 and uses only natural ingredients, with the core belief: “If ¾ of your drink is the mixer, mix with the best.”",
'滴滴香茶粉與調飲':"Didi Shiang tea powders and drinks",'滴滴香':"Didi Shiang",'台灣研磨茶粉':"Taiwanese ground tea powder",
'品味的慣性從喝茶轉向甜點烘焙，從一杯茶到一匙茶粉，把一座茶山的味道帶進下一個世代。':"As taste habits shift from drinking tea to desserts and baking, from a cup of tea to a spoon of tea powder, bringing the flavour of a whole tea mountain to the next generation.",
'茶粉可以直接溶進飲料，茶味不會被冰塊和果汁稀釋，比現泡的茶湯更穩定，出杯也更快。包種茶粉給了多多綠清新的茶香；東方美人茶粉天生帶蜜香，和咖啡、牛奶特別合拍，是鴛鴦咖啡拿鐵的關鍵。':"Tea powder dissolves straight into the drink, so the tea flavour isn't diluted by ice or juice; it's more stable than freshly brewed tea and faster to serve. Pouchong tea powder gives the Sparkling Yogurt Green Tea its fresh tea aroma; Oriental Beauty tea powder carries a natural honey note that pairs especially well with coffee and milk, and is the key to the Coffee Milk Tea.",
'從上一代到這一代，茶一直是家裡的日常。滴滴香發現不是年輕人不喜歡茶，而是喝茶、吃茶的方式改變了，於是把烏龍、鐵觀音、紅茶研磨成適合甜點、烘焙與飲品的茶粉，讓台灣茶走進更多人的生活。':"From one generation to the next, tea has always been part of daily life at home. Didi Shiang realised it's not that young people dislike tea, but that the way tea is drunk and eaten has changed, so they grind oolong, Tieguanyin and black tea into powders suited to desserts, baking and drinks, bringing Taiwanese tea into more people's lives.",
'中澤奶霜 K+ 與 Valencia Chen':"Nakazawa Cream K+ and Valencia Chen",'官網聯絡表單':"Website contact form",'苗林行':"Miaolin",'代理 中澤奶霜 K+':"Distributor of Nakazawa Cream K+",
'中澤奶霜 K+，日本北海道純淨乳源，輕盈化口、穩定性佳。':"Nakazawa Cream K+: pure Hokkaido dairy, light on the palate and highly stable.",
'在台灣做奶蓋，最怕打發後沒多久就塌。中澤奶霜 K+ 針對台灣的炎熱天氣加強了保型性，化口又輕盈，讓 Valencia Chen 的奶蓋可以又挺又清爽，這也是阿問留給你的小驚喜之一。':"Making milk foam in Taiwan, the biggest fear is that it collapses soon after whipping. Nakazawa Cream K+ was reinforced for Taiwan's hot weather to hold its shape while staying light, so the foam on Valencia Chen can stand tall and stay refreshing. It's one of the little surprises A-Wen left for you.",
'創立於明治初期的中澤乳業，150 多年以來專注乳製品研發與製造，以高品質北海道乳源與獨家技術，深受日本餐飲業界信賴。\n「中澤奶霜 K+」兼具醇厚乳香與穩定操作性，輕盈化口、組織細緻，適合咖啡、調酒與甜點應用。':"Founded in the early Meiji era, Nakazawa Foods has focused on dairy R&D and production for over 150 years, earning the trust of Japan's food-service industry with high-quality Hokkaido milk and proprietary technology.\nNakazawa Cream K+ combines a rich dairy aroma with stable handling: light on the palate, fine-textured, and suited to coffee, cocktails and desserts.",
'咖啡豆':"Coffee beans",
'AD Cafe 最信任的烘豆夥伴，聯名豆《默默》《煦煦》都出自這裡。':"AD Cafe's most trusted roasting partner; the collaboration beans Momo and Xuxu both come from here.",
'這次有五杯調飲用了 Phase 的咖啡。其中《默默》和《煦煦》是 AD Cafe 和 Phase 一起開發的聯名豆：《默默》是 I 人系的淺中焙，有梔子花、鳳梨、水果軟糖、香檳葡萄的細膩層次；《煦煦》是 E 人系的中焙，甜桃、莓果、蜂蜜、東方美人的熱情甜香。另外也用了《柔韌》和《晨星》，晨星本身就帶著鳳梨、芒果和椰子的熱帶風情。《柔韌》有香草調性，以甜點的角度來聯想，幾乎沒有香草不能搭配的原料，大大提升了咖啡與其他原料的搭配潛力。':"Five drinks this time use Phase's coffee. Momo and Xuxu are collaboration beans developed by AD Cafe and Phase: Momo is the introvert's light-medium roast with delicate layers of gardenia, pineapple, fruit gummies and champagne grape; Xuxu is the extrovert's medium roast with the warm sweetness of peach, berries, honey and Oriental Beauty tea. We also used Supple and Morning Star; Morning Star itself carries the tropical feel of pineapple, mango and coconut. Supple has a vanilla tone, and from a pastry point of view there's hardly an ingredient vanilla can't pair with, which greatly expands how coffee can combine with other ingredients.",
'Phase 同時也是台中場的場地夥伴。':"Phase is also the venue partner for the Taichung stop.",'看台中場 Phase 勤美的場地介紹 ›':"See the Taichung venue, Phase · CMP ›",'官網企業合作頁':"Business partnership page",
'3TEMP × 百懋國際':"3TEMP × Baimao International",'瑞典 3TEMP 多功能沖煮系統・器材夥伴':"Swedish 3TEMP multi-function brewing system · Equipment partner",'為什麼選他製作咖啡':"Why we brew the coffee with it",
'瑞典 3TEMP 沖煮系統，冷萃 20 分鐘就能萃出 2 公升，又快又穩。':"The Swedish 3TEMP brewing system pulls 2 litres of cold brew in 20 minutes: fast and steady.",
'客座現場最怕冷萃來不及做。3TEMP 可以直接切換成冷萃模式，原廠標示 20 分鐘內就能萃出 2 公升；悶蒸、萃取、收尾三段的水溫和注水節奏還能各自設定、存成配方，讓每一站做出來都是同一個味道。又快又穩，這趟巡迴真的很需要它。':"The biggest worry at a pop-up is not getting cold brew done in time. 3TEMP switches straight into cold-brew mode and, per the manufacturer, extracts 2 litres within 20 minutes. Water temperature and pour rhythm for bloom, extraction and finish can each be set and saved as a recipe, so every stop tastes the same. Fast and steady, this tour really needed it.",
'3TEMP 是來自瑞典的高階沖煮系統，造型簡潔優雅，並且能夠快速切換熱萃／冷萃模式。\n3TEMP 在台灣由百懋國際代理，百懋國際是專業的咖啡設備商，代理義大利 Victoria Arduino 義式咖啡機、BWT 淨水系統、Mahlkonig 磨豆機等知名品牌。':"3TEMP is a high-end brewing system from Sweden with a clean, elegant design that switches quickly between hot and cold brew.\nIn Taiwan 3TEMP is distributed by Baimao International, a professional coffee-equipment company that also represents Victoria Arduino espresso machines from Italy, BWT water filtration and Mahlkönig grinders.",
'百懋國際':"Baimao International",
/* ---- drinks ---- */
'葡萄':"Grape",'接骨木花':"Elderflower",'草本':"Herbal",
'大道至簡，昇華飛壘的經典葡萄印象':"Simplicity at its purest, elevating the classic grape memory of Fei Lei gum",
'飛壘口香糖是我們兒時的共同記憶\n是深埋在腦海中不會忘記的味道\n比賽後，阿問的調飲更追求「大道至簡」\n不過分修飾，精準呈現素材的、留白的美\n這杯中阿問只放入必要的素材\n回歸純粹透光的紫，提升飛壘的味覺記憶':"Fei Lei bubble gum is a shared childhood memory\nA taste buried deep in the mind that never fades\nAfter the competition, A-Wen's drinks pursue “simplicity at its purest”\nNo over-decoration, just the precise beauty of the ingredients and of empty space\nIn this cup A-Wen puts only what is necessary\nReturning to a pure, translucent purple that lifts the taste memory of Fei Lei",
'對我來說，一個好作品除了美味之外，必然滿足某些特定條件。可能是驚喜、是共鳴感、是故事或共同記憶，抑或是一些留待意會的東西。':"To me, beyond being delicious, a good work must meet certain conditions. It might be surprise, resonance, a story or a shared memory, or something left to be sensed.",
'而如今的我，在創作上追求「大道至簡」。從外觀、選材、風味輪廓，逐漸越發簡潔，不過分修飾，只精準地呈現素材本身的美、留白的美、俐落的美。Play Gum 就是個恰如其分的作品。':"Today my creative pursuit is “simplicity at its purest”. Appearance, ingredient choice and flavour outline keep getting leaner, with no excess decoration, presenting only the beauty of the ingredients themselves, the beauty of empty space, the beauty of being clean-cut. Play Gum is exactly such a work.",
'我們從概念出發，只選擇必要的素材，捨去多餘裝飾，讓作品回歸最純粹的液體本身，帶著透光的紫，和你絕對會有印象的高級版葡萄口味飛壘口香糖。這是我們孩提時代的共同記憶，和你我都能理解、產生共鳴的味道。':"We start from the concept, choose only the necessary ingredients, discard surplus decoration, and let the work return to the purest liquid itself: a translucent purple and the premium version of a grape Fei Lei bubble gum you will surely remember. It's a shared memory of our childhood, a taste you and I can both understand and relate to.",
'阿問':"A-Wen",
'葡萄、法蘭西梨糖漿':"Grape and French pear syrups",'接骨木花通寧水':"Elderflower tonic water",'芭樂、檸檬澄清果汁':"Clarified guava and lemon juice",'艾碧斯風味蒸餾液':"Absinthe flavour distillate",
'柳橙、紫蘇':"Orange, shiso",'示意圖':"Illustrative photo",'使用原料・示意圖':"Ingredients · illustrative",
'抹茶':"Matcha",'香草':"Vanilla",'椰子':"Coconut",
'材料間 1+1 > 2 的隱藏綜效，靜待知音發掘':"A hidden 1+1 > 2 synergy between ingredients, waiting for a kindred spirit to find it",
'綜效，是透過特定素材的組合\n連結到一個原本不存在其中的風味\n在這款作品中，阿問留下一些小小驚喜\n在經典的奶類特調中尋求趣味\n把厚重的奶蓋做得清爽，或是其他？\n而這個風味驚喜就獻給你，Valencia Chen':"Synergy is combining specific ingredients\nTo connect to a flavour that wasn't originally there\nIn this work A-Wen leaves a few little surprises\nSeeking fun within a classic milk-based drink\nMaking a heavy milk foam refreshing, or something else?\nThis flavour surprise is dedicated to you, Valencia Chen",
'在風味設計裡，有個概念叫做「綜效」，白話俗稱「風味拼圖」。簡單來說，就是透過特定素材的組合，拼湊出某個「原本不存在其中的風味」。':"In flavour design there's a concept called “synergy”, colloquially a “flavour puzzle”. Simply put, by combining specific ingredients you piece together a flavour that “wasn't originally in any of them”.",
'而這款作品，我想留下一些小小驚喜給你。比如，明明是奶蓋，卻有著清爽口感；又或者，單從飲品的外觀或原料，完全無法預期最後是這樣的風味。':"With this work I want to leave you a few little surprises. For example, it's clearly a milk foam, yet it drinks refreshingly; or, from the look or the ingredients alone, you'd never predict it ends up tasting like this.",
'我並不熱衷於製作奶類特調，除了個人喜好之外，乳製品對我而言，也不是個容易運用得「有趣」的素材。不過這次的成果，我自己相當滿意。至於究竟創造了什麼意想不到的風味，我留了線索，靜待知音。':"I'm not keen on making milk-based drinks. Personal taste aside, dairy isn't an ingredient I find easy to use in an “interesting” way. But I'm quite satisfied with this result. As for what unexpected flavour was created, I've left clues and await a kindred spirit.",
'獻給你，Valencia Chen。':"Dedicated to you, Valencia Chen.",
'《柔韌》濃縮咖啡':"Supple espresso",'抹茶糖漿':"Matcha syrup",'中澤奶霜 K+':"Nakazawa Cream K+",'可爾必思、烤椰子水、橙花':"Calpis, toasted coconut water, orange blossom",
'四季':"The Four Seasons",'香蕉':"Banana",'白桃':"White peach",'茴香':"Fennel",
'舞台下的日常，把香蕉牛奶變得輕盈適口':"Everyday life off stage: banana milk made light and easy to drink",
'韋瓦第的《四季》\n是阿迪踏上舞台的契機\n以四季生長的香蕉做這杯的主題\n冬日盛產的牛奶做出口感\n春季生長的草本和茴香做為銜接\n夏秋採收的桃子讓整體是白色系輕盈的一杯':"Vivaldi's The Four Seasons\nWas Adi's first step onto a stage\nBananas, which grow in every season, are this cup's theme\nWinter's abundant milk gives the texture\nSpring herbs and fennel bridge the layers\nPeaches harvested in summer and autumn keep the whole cup white and light",
'韋瓦第的《四季》是小提琴演奏的經典曲目，擷取春夏秋冬的景色寫進譜裡。這是阿迪小學第一次站上升旗台，拉給全校師生聽的曲子。':"Vivaldi's The Four Seasons is a classic violin piece that writes the scenery of spring, summer, autumn and winter into the score. It was the piece Adi played for the whole school the first time he stood on the flag-raising platform in primary school.",
'四季會更迭，但放學後的餐桌上總是能吃到香蕉，香蕉配牛奶更是絕配。這杯把四季疊在一起：杯底是帶著草本和茴香的春日氣息，以夏秋採收的桃子做主要調性，最後用冬日盛產的牛奶打發，做出舒芙蕾般的口感，讓整體是白色系輕盈的一杯。':"Seasons change, but there were always bananas on the table after school, and banana with milk is a perfect match. This cup stacks the four seasons: at the bottom, a spring air of herbs and fennel; peaches harvested in summer and autumn as the main tone; and finally winter's abundant milk whipped into a soufflé-like texture, keeping the whole cup white and light.",
'在走下舞台之後走進吧檯，享受咖啡的樂趣，然後把四季裝進這個杯子裡。':"Stepping off the stage and behind the bar, enjoying the fun of coffee, and then putting the four seasons into this cup.",
'小時候的阿迪，拉著小提琴':"Adi as a child, playing the violin",
'香蕉澄清果汁':"Clarified banana juice",'E 人咖啡《煦煦》冰滴':"Extrovert coffee Xuxu, cold drip",'3TEMP 多功能沖煮系統':"3TEMP multi-function brewing system",'白桃、鹽':"White peach, salt",
'8 又二分之一':"Eight and a Half",'芭樂':"Guava",'肉桂':"Cinnamon",'煙燻':"Smoke",
'困難中的希望，煙燻中的黃綠色亞熱帶風味':"Hope amid hardship: a smoky, yellow-green subtropical flavour",
'李壽全的《8又二分之一》\n在惡地逢生的年代唱著日常\n以在惡地中茁壯生長的芭樂為核心風味\n那也是木木童年踏青回憶的象徵\n這杯用 8 種素材呼應 8 個生活片段\n最後的二分之一，是十月的這個午後':"Li Shou-chuan's 8½\nSang of daily life in an era rising from the badlands\nGuava, which thrives in the badlands, is the core flavour\nAlso a symbol of Mumu's childhood outings\nThis cup uses 8 ingredients echoing 8 fragments of life\nThe final half is this October afternoon",
'李壽全的《8又二分之一》寫在惡地逢生的 80 年代，經濟即將起飛、解嚴前夕，而他唱著小人物的日常，有希望，也有茫然。':"Li Shou-chuan's 8½ was written in the 1980s, an era rising from the badlands: the economy about to take off, martial law about to lift, while he sang the daily life of ordinary people, with hope and with confusion.",
'這杯從木木的童年回憶出發：惡地泥火山踏青後的一盤芭樂。惡地泥岩帶給芭樂豐富的養分，以荔枝的飽滿口感銜接肉桂與花草的香，再用極少的青花椒點綴。上層鋪上綿密、帶有熱帶水果調性的咖啡泡泡，吸收櫻桃木煙燻的香氣，就是惡地中結出的美好果實。':"This cup starts from Mumu's childhood memory: a plate of guava after an outing to the badland mud volcanoes. The badland mudstone feeds the guava richly; lychee's full body bridges cinnamon and floral aromas, with a touch of green Sichuan pepper. On top, a dense coffee foam with tropical-fruit notes that soaks up cherry-wood smoke: the beautiful fruit that grows out of the badlands.",
'8 種素材，呼應歌裡的八個生活片段。最後的二分之一，是十月午後的你。':"8 ingredients, echoing the eight fragments of life in the song. The final half is you, this October afternoon.",
'小時候的木木，在泥火山':"Mumu as a child, at the mud volcanoes",
'芭樂、荔枝、芒果澄清果汁':"Clarified guava, lychee and mango juice",'老湯姆風味蒸餾液':"Old Tom flavour distillate",'I 人咖啡《默默》濃縮':"Introvert coffee Momo, espresso",'肉桂、青花椒、櫻桃木煙燻':"Cinnamon, green Sichuan pepper, cherry-wood smoke",
'主旋律':"The Main Theme",'白葡萄':"White grape",'洋甘菊':"Chamomile",'綠豆蔻':"Green cardamom",
'同個光譜的大眾端，輕鬆的白葡萄泡泡':"The popular end of the same spectrum: an easy white-grape foam",
'主旋律是樂曲中\n最抓耳的核心部分\n以同樣材料架構製作大眾流行化的一杯\n用濃縮咖啡直球對決甜蜜的白葡萄\n並以花香和香料來點綴\n均值後有綿密的泡沫口感':"The main theme is the catchiest\nCore part of a piece of music\nThe same ingredient structure, made into a popular, crowd-pleasing cup\nEspresso goes head-on against sweet white grape\nAccented with florals and spice\nBlended into a dense, creamy foam",
'大眾化的動機。主旋律通常是樂曲中最抓耳的核心部分。用濃縮咖啡與白葡萄，以甜蜜的直球風味對決，再以花香和香料點綴，均值後做成綿密的泡沫口感，是每個人都能快速理解、並且喜愛的飲品。':"The motive of going mainstream. The main theme is usually the catchiest core of a piece. Espresso and white grape face off in a sweet, straightforward flavour, accented with florals and spice and blended into a dense foam: a drink everyone can grasp quickly and love.",
'主旋律和變奏曲是霓裡用同一組材料做出的兩杯，一杯走向大眾，一杯走向實驗。建議兩杯一起點，比較看看。':"The Main Theme and The Variation are two cups LOOP IN NEON made from the same set of ingredients, one heading for the crowd, one for experiment. We suggest ordering both and comparing.",
'霓裡的咖啡':"LOOP IN NEON's coffee",'中深焙 衣索比亞水洗濃縮咖啡':"Medium-dark roast washed Ethiopian espresso",'綠豆蔻、洋甘菊薄糖水、白葡萄汁':"Green cardamom, light chamomile syrup, white grape juice",
'變奏曲':"The Variation",'檜木':"Hinoki",'柑橘':"Citrus",
'同個光譜實驗性的探索，白葡萄上的層次極限':"An experimental exploration on the same spectrum, pushing white grape's layers to the limit",
'同一個主題下\n打破常規帶來的豐富的潛力\n在同樣材料架構下不計成本的實驗性探索\n混合不同焙度的冷萃讓風味跨度更寬\n銜接白花、柑橘、木質精油的層次變化\n就像一首能驚艷四座的變奏曲':"Under the same theme\nThe rich potential of breaking convention\nAn experimental exploration on the same ingredient structure, cost no object\nBlending cold brews of different roasts widens the flavour span\nBridging layers of white flowers, citrus and woody essential oils\nLike a variation that stuns the whole room",
'獨立化的動機。象徵在同一個主題下，進行不計成本、打破常規的實驗性探索。混合不同焙度的冷萃，讓衣索比亞水洗的風味跨度更寬，同時往白花、柑橘、木質精油等方向延伸搭配。風味層次富有變化，就像一首能驚艷四座的變奏曲。':"The motive of going independent. Under the same theme, an experimental exploration that breaks convention, cost no object. Blending cold brews of different roast levels widens the flavour span of the washed Ethiopian, while extending toward white flowers, citrus and woody essential oils. The layers keep shifting, like a variation that stuns the whole room.",
'淺焙＋中深焙 衣索比亞水洗冷萃':"Light + medium-dark roast washed Ethiopian cold brew",'Chardonnay 脫醇白葡萄酒':"Chardonnay de-alcoholised white wine",'綠豆蔻、洋甘菊糖水、檜木、橄欖油':"Green cardamom, chamomile syrup, hinoki, olive oil",
'菊花':"Chrysanthemum",'枸杞':"Goji",'檸檬':"Lemon",
'菊花與枸杞象徵著的寧靜、美好的歲月':"Chrysanthemum and goji, symbols of calm and golden days",
'古希臘語\n象徵著寧靜與美好的歲月\n以自釀菊花糖漿與菊花茶為基底\n交織枸杞的甘潤與檸檬的微酸\n最後注入清亮明快的淺焙冷萃咖啡\n是生命中各種美好相處的溫柔時光':"Ancient Greek\nFor calm and golden days\nHouse-made chrysanthemum syrup and chrysanthemum tea as the base\nWoven with the mellow sweetness of goji and a touch of lemon\nFinished with a bright, lively light-roast cold brew\nThe tender hours of every good company in life",
'Halcyon 在古希臘語中象徵著寧靜與美好的歲月。':"In ancient Greek, Halcyon stands for calm and golden days.",
'這杯特調以自釀菊花糖漿與菊花茶為基底，交織枸杞汁的甘潤與檸檬汁的微酸，最後注入清亮明快的淺焙冷萃咖啡，把記憶裡與生命中各種美好相處的溫柔時光，揉進微酸甜與花香的層次中。':"This drink is built on house-made chrysanthemum syrup and chrysanthemum tea, woven with the mellow sweetness of goji juice and the light tang of lemon juice, then finished with a bright, lively light-roast cold brew, folding the tender hours of every good company in memory and in life into layers of gentle sweet-sour and florals.",
'風味層次：清香菊花茶韻 × 枸杞檸檬酸甜 × 淺焙冷萃咖啡的明亮果酸。':"Flavour layers: fresh chrysanthemum tea × goji-lemon sweet-sour × the bright fruit acidity of light-roast cold brew.",
'StableNice BLDG. 的自釀與咖啡':"StableNice BLDG.'s house-made syrup and coffee",'自釀菊花糖漿・淺焙冷萃咖啡':"House-made chrysanthemum syrup · light-roast cold brew",'菊花茶、枸杞汁、檸檬汁':"Chrysanthemum tea, goji juice, lemon juice",
'黃昏線':"Twilight Line",'鳳梨':"Pineapple",'小豆蔻':"Cardamom",
'以鳳梨為日光，配上漸深的天色與薄雲':"Pineapple as the last daylight, under a deepening sky and thin clouds",
'兒時夏日玩樂的記憶\n總有白晝與黑夜交會的那條界線\n用鳳梨在杯中留下黃昏最後的日光\n小豆蔻青茶帶來的香料茶韻是漸暗的天色\n與熱帶風情的咖啡交會成杯中的黃昏線\n天邊的椰子浮雲點綴著柔和的奶香':"Memories of summer play as a child\nThere was always that line where day met night\nPineapple leaves dusk's last daylight in the cup\nCardamom and green tea's spiced notes are the darkening sky\nMeeting the tropical coffee to form the twilight line in the cup\nCoconut clouds on the horizon add a soft milkiness",
'小時候的夏天，總要玩到天空開始變色，才知道該回家；長大後才知道，白晝與黑夜交會的那條界線，叫做「黃昏線」。':"As a kid, summer meant playing until the sky began to change colour before knowing it was time to go home; only later did I learn the line where day meets night is called the “twilight line”.",
'晨星配方本身帶著鳳梨、芒果與椰子的熱帶風情，這杯就以澄清鳳梨汁為主軸，像黃昏最後留下的明亮日光。往上，小豆蔻的香料感與青茶的茶韻讓風味慢慢轉深，像天色一層層暗下來，兩層交會的地方，就是杯中的黃昏線；上層覆著椰子泡泡，像天邊還沒散去的雲，也為清爽的果酸補上一層柔和奶香。':"The Morning Star blend itself carries the tropical feel of pineapple, mango and coconut, so this cup is built on clarified pineapple juice, like the bright last light of dusk. Above it, cardamom's spice and green tea's notes slowly deepen the flavour, like the sky darkening layer by layer; where the two layers meet is the twilight line in the cup. On top sits a coconut foam, like clouds not yet gone from the horizon, adding a soft milkiness to the fresh fruit acidity.",
'一杯咖啡版的鳳梨青茶。我們留不住黃昏，但可以把天還沒全黑的那段時間，留在杯子裡。':"A coffee version of pineapple green tea. We can't hold on to dusk, but we can keep the time before the sky goes fully dark in a cup.",
'鳳梨、芒果澄清果汁':"Clarified pineapple and mango juice",'《晨星》冷萃咖啡':"Morning Star cold brew",'青茶、小豆蔻、椰子泡泡':"Green tea, cardamom, coconut foam",
'氣泡多多綠':"Sparkling Yogurt Green Tea",
'用包種茶和鳳梨果汁 Twist，再加上氣泡去除綠茶的澀感，最後補上花草的香氣':"A twist with Pouchong tea and pineapple juice, bubbles to cut the green tea's astringency, and a floral finish",
'以熟悉的多多綠為主體\n用乳酸氣泡飲的方式\n改善多多綠過於乾澀的口感\n再以 NEMA 的琴酒風味蒸餾液\n昇華香氣與層次':"Built on the familiar yogurt green tea\nAs a sparkling lactic drink\nFixing the drying astringency of the original\nThen NEMA's gin flavour distillate\nLifts the aroma and layers",
'文山包種茶粉':"Wenshan Pouchong tea powder",'鳳梨澄清果汁':"Clarified pineapple juice",'標準琴酒風味蒸餾液':"Standard gin flavour distillate",'氣泡水、可爾必思':"Sparkling water, Calpis",
'鴛鴦咖啡拿鐵':"Coffee Milk Tea",
'用東方美人茶搭香草調咖啡的泡泡 Twist，讓口感更滑順，喝起來有點像是生巧克力':"A twist of Oriental Beauty tea with a vanilla-toned coffee foam for a smoother sip, a bit like fresh chocolate ganache",
'把經典的港式鴛鴦升級\n選用鮮乳坊 A2β 酪蛋白鮮乳\n搭配打發過、帶點香草甜奶香的咖啡\n和天生帶有蜜香的東方美人茶\n做出醇厚飽滿的口感':"The classic Hong Kong yuenyeung, upgraded\nWith Better Milk A2β casein fresh milk\nWhipped coffee with a hint of vanilla and sweet milk\nAnd Oriental Beauty tea with its natural honey note\nFor a rich, full-bodied texture",
'東方美人茶粉':"Oriental Beauty tea powder",
'祕魯 SL09 魯魯米':"Peru SL09 Lulume",'/ 杯':"/ cup",'$700 / 120g 豆':"$700 / 120g beans",
'買咖啡豆送一杯手沖！這是阿迪最近最喜歡的新品種，別名印加藝伎的 SL09':"Buy the beans, get a pour-over free! Adi's current favourite new variety, SL09, nicknamed the Inca Geisha",
'由阿迪在現場為你手沖。喜歡的話，也可以把同一支豆子帶回家。':"Hand-brewed for you on site by Adi. If you like it, take the same beans home.",
'產區':"Origin",'祕魯 奇魯魯米莊園 Peru Qillu Rumi':"Peru, Qillu Rumi Estate",'海拔':"Altitude",'品種':"Variety",'處理法':"Process",'水洗':"Washed",'焙度':"Roast",'淺焙':"Light",'風味':"Flavour",
'茉莉｜脆梅｜蜂蜜｜紅茶':"Jasmine | crisp plum | honey | black tea",'Phase 豆袋':"Phase bean bag",
'巴拿馬 波奎特 翡翠莊園 紅標藝伎':"Panama Boquete Esmeralda Red Label Geisha",'$3,500 / 120g 豆':"$3,500 / 120g beans",
'買咖啡豆送一杯手沖！沒錯，就是那個翡翠😂 既然要帶手沖，就帶個去年三冠王的翡翠吧':"Buy the beans, get a pour-over free! Yes, that Esmeralda 😂 If we're bringing pour-overs, let's bring last year's triple-crown Esmeralda",
'巴拿馬 波奎特 翡翠莊園 瑪利歐地塊 Panama Boquete Esmeralda Mario Arriba':"Panama, Boquete, Hacienda La Esmeralda, Mario Arriba lot",'藝伎 Geisha':"Geisha",
'茉莉花｜白柚｜水蜜桃｜荔枝':"Jasmine | pomelo | peach | lychee",'$3,500 / 120g（建議從烘焙日起養豆 30 天後再沖煮）':"$3,500 / 120g (best rested 30 days from roast date before brewing)",
/* ---- groups / filters / tiers ---- */
'巡迴四站都有':"At all four stops",'場地限定':"Venue exclusives",'只在當站供應':"Only at its own stop",
'全部':"All",'我的收藏':"My favourites",'沒咖啡的':"No coffee",'純咖啡的':"Just coffee",
'策展':"Curator",'特邀':"Guest",'聯合響應':"Co-hosts",
/* ---- bites ---- */
'綠豆蔻白味噌費南雪':"Green Cardamom & White Miso Financier",'$180 / 2 枚':"$180 / 2 pcs",'香菜籽子・活動客製口味':"Xiangcai Zizi · custom flavour for the event",
'香菜籽子是大稻埕附近的二樓老宅咖啡廳，以季節性甜點聞名。這次為客座客製了綠豆蔻白味噌口味，一份兩枚。':"Xiangcai Zizi is a second-floor old-house café near Dadaocheng known for seasonal desserts. For this guest menu they created a green cardamom and white miso flavour, two pieces per serving.",
'紅豆生乳包':"Red Bean Fresh Cream Bun",'$100 / 顆':"$100 each",'安工坊':"Ann Workshop",
'安工坊創立於嘉義東石，2020 年搬到台北迪化商圈，是沒有店面的麵包工作室，主要和咖啡館、餐廳合作開發麵包。':"Ann Workshop was founded in Dongshi, Chiayi, and moved to Taipei's Dihua Street area in 2020. A bakery studio with no storefront, it mainly develops breads with cafés and restaurants.",
'Bios 金瓜米粉大亨堡':"Bios Pumpkin Rice-Noodle Hot Dog Bun",
'Bios 在古希臘文中是「日常生活」的意思。把日常最熟悉的台味收進酥脆微焦的烤麵包裡：香氣濃郁、質地綿密的台式金瓜米粉（南瓜、米粉、香菇、蝦米、豬肉絲），夾進烘烤到金黃香酥的大亨堡麵包。炊粉的甘甜軟韌與麵包的酥脆交織，翻玩出既復古又新穎的口感。':"Bios means “daily life” in ancient Greek. The most familiar Taiwanese flavour tucked into crisp, lightly charred toasted bread: fragrant, tender Taiwanese pumpkin rice noodles (pumpkin, rice vermicelli, shiitake, dried shrimp, shredded pork) stuffed into a hot dog bun toasted golden and crisp. The sweet, chewy noodles against the crisp bread make a texture both retro and new.",
'Cheese Terrine 酸種冷盤':"Cheese Terrine Sourdough Plate",'Phase × 碧月':"Phase × Biyue",
'以低溫蒸烤 Cheese Terrine 搭配酸種麵包、拜雍生火腿、麝香葡萄與番茄碎冰，最後淋上自製鼠尾草香料油。鹹甜交錯，帶有乳酪濃郁與草本香氣。':"Slow-steamed cheese terrine served with sourdough, Bayonne ham, muscat grapes and tomato granita, finished with house-made sage spice oil. Savoury and sweet interlace, with rich cheese and herbal aromas.",
'碧月 巴斯克蛋糕':"Biyue Basque Cheesecake",'請見甜點櫃':"See the dessert counter",'碧月・9 種口味':"Biyue · 9 flavours",
'奶黃芋泥':"Custard Taro",'大甲芋頭 × 鹹蛋黃奶黃醬 × 肉鬆':"Dajia taro × salted egg yolk custard × pork floss",'綿密芋泥搭配鹹香奶黃醬與肉鬆，甜鹹風味，是碧月的招牌口味。':"Silky taro paste with savoury custard and pork floss, a sweet-savoury blend and Biyue's signature flavour.",
'抹茶蕨餅':"Matcha Warabi Mochi",'京都抹茶 × 抹茶蕨餅':"Kyoto matcha × matcha warabi mochi",'抹茶半熟乳酪搭配 Q 軟抹茶蕨餅，茶香濃郁，帶有微苦的大人系風味。':"Half-baked matcha cheesecake with soft, chewy matcha warabi mochi: intense tea aroma with a slightly bitter, grown-up edge.",
'芝麻牛乳凍':"Sesame Milk Pudding",'黑芝麻 × 鮮乳坊牛乳 × 北海道黃豆粉':"Black sesame × Better Milk × Hokkaido kinako",'濃厚黑芝麻乳酪搭配滑嫩牛乳凍與黃豆粉，芝麻香氣飽滿。':"Rich black sesame cheesecake with silky milk pudding and kinako, full of sesame aroma.",
'經典香草':"Classic Vanilla",'香草半熟乳酪':"Half-baked vanilla cheese",'最單純也最經典的原味，乳酪香氣與香草風味為主，口感柔滑濃郁。':"The simplest and most classic: cheese aroma and vanilla lead, with a smooth, rich texture.",
'紅烏龍脆脆':"Red Oolong Crunch",'鹿野紅烏龍茶 × 法芙娜可可脆餅 × 掛霜核桃':"Luye red oolong × Valrhona cocoa crisps × frosted walnuts",'紅烏龍茶香結合可可脆餅與核桃，茶香、可可與堅果香氣交織，增加酥脆口感。':"Red oolong tea with cocoa crisps and walnuts: tea, cocoa and nutty aromas interlace with added crunch.",
'提拉米蘇':"Tiramisu",'濃縮咖啡 × 馬斯卡彭 × 黑蘭姆酒':"Espresso × mascarpone × dark rum",'咖啡與馬斯卡彭的經典組合，加入黑蘭姆酒提香，風味濃厚。':"The classic pairing of coffee and mascarpone, lifted with dark rum for a rich flavour.",
'生巧克力':"Fresh Chocolate",'法芙娜可可 × 比利時生巧克力':"Valrhona cocoa × Belgian fresh chocolate",'濃郁可可半熟乳酪搭配生巧克力，整體以深厚巧克力風味為主。':"Rich cocoa cheesecake with fresh chocolate ganache, led by deep chocolate flavour.",
'開心果 No.2':"Pistachio No.2",'自製開心果醬 × 開心果碎粒':"House-made pistachio paste × crushed pistachios",'以自製開心果醬製作，搭配大量開心果碎粒，堅果香氣濃郁、口感豐富。':"Made with house-made pistachio paste and plenty of crushed pistachios: intensely nutty with a rich texture.",
'梔子花四季春 × 胭脂梅酒凍':"Gardenia Four Seasons Tea × Plum Wine Jelly",'梔子花四季春茶 × 胭脂梅酒 × 砂糖橘':"Gardenia Four Seasons tea × rouge plum wine × mandarin",'清香四季春茶搭配酸甜梅酒凍與柑橘，整體走清爽果香茶感路線。':"Fragrant Four Seasons tea with sweet-sour plum wine jelly and citrus, a light, fruity tea-forward style."
};
/* text the render code glues together from a label and a value; applied to the whole (trimmed) text node */
const RX=[
 [/ 使用原料・示意圖$/," ingredients (illustrative)"],[/ 示意圖$/," (illustrative photo)"],
 [/ 限定$/," only"],[/^收藏/,"Save "],[/，看介紹$/,", see details"],
 [/・調飲提案 (\d+) 杯$/,"・in $1 drinks"],[/・場地介紹 ›$/,"・about the venue ›"],[/・為什麼選它 ›$/,"・why we chose it ›"],
 [/^小點・/,"Bites・"],[/（(Mon|Tue|Wed|Thu|Fri|Sat|Sun)）/," ($1) "]
];
const CJK=/[　-鿿＀-￯]/;
function tx(s){const k=s.trim();if(!k||!CJK.test(k))return null;let v=EN[k];
  if(v==null){for(const [re,rep] of RX)if(re.test(k)){v=k.replace(re,rep);break}}
  return v==null?null:s.replace(k,()=>v)}
const ATTRS=['aria-label','title','alt'];
function node(n){
  if(n.nodeType===3){const v=tx(n.nodeValue);if(v!=null&&v!==n.nodeValue)n.nodeValue=v}
  else if(n.nodeType===1&&!n.classList.contains('en')){for(const a of ATTRS){const o=n.getAttribute(a);if(o){const v=tx(o);if(v!=null&&v!==o)n.setAttribute(a,v)}}n.childNodes.forEach(node)}}
/* data: translate strings in place; a drink keeps its Chinese name as the subtitle */
function walk(o){
  const drink=!Array.isArray(o)&&'grp' in o;
  if(drink&&EN[o.name]!=null){o.en=o.name;o.name=EN[o.name]}
  else if(drink&&o.en&&EN[o.en]!=null)o.en=EN[o.en];
  for(const k of Object.keys(o)){if(drink&&(k==='name'||k==='en'))continue;const v=o[k];
    if(typeof v==='string'){if(EN[v]!=null)o[k]=EN[v]}else if(v&&typeof v==='object')walk(v)}}
if(lang==='en'){new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(node))).observe(H,{childList:true,subtree:true});node(document.head)} /* head (the title) is already parsed */
window.MOTIF_I18N={lang,tr:o=>{if(lang==='en')walk(o);return o}};

/* header buttons */
const SUN='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const MOON='<svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
function paintTheme(){const dark=H.dataset.theme==='dark';const b=document.getElementById('themeBtn');if(!b)return;
  b.innerHTML=dark?SUN:MOON;b.setAttribute('aria-label',lang==='en'?(dark?'Switch to light theme':'Switch to dark theme'):(dark?'切換為淺色':'切換為深色'));
  const m=document.querySelector('meta[name="theme-color"]');if(m)m.content=dark?'#17140F':'#FCFAF6'}
addEventListener('DOMContentLoaded',()=>{
  const lb=document.getElementById('langBtn');if(lb){lb.textContent=lang==='en'?'中':'EN';lb.setAttribute('aria-label',lang==='en'?'切換為中文':'Switch to English');
    lb.onclick=()=>{try{localStorage.setItem('motif-lang',lang==='en'?'zh':'en')}catch(e){}location.reload()}}
  paintTheme();const tb=document.getElementById('themeBtn');if(tb)tb.onclick=()=>{H.dataset.theme=H.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('motif-theme',H.dataset.theme)}catch(e){}paintTheme()};
});
})();
