const activities = [
    {
        title: "Hakone Shrine: A Serene Oasis",
        description: "Hakone Shrine is a peaceful Shinto shrine located by Lake Ashi, surrounded by lush greenery and offering stunning views of Mount Fuji.",
        image: "/assets/images/Hakone_Shrine_1.jpg",
        link: "/src/activities/Hakone_Shrine.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Belluna Dome",
        description: "Belluna Dome, located in Saitama, is the unique home of the Saitama Seibu Lions, known for its retractable roof and natural surroundings.",
        image: "/assets/images/Belluna_Dome_1.jpg",
        link: "/src/activities/Belluna_Dome.html",
        region: "kanto",
        prefecture: "saitama"
    },
    {
        title: "Matsumoto Castle",
        description: "Matsumoto Castle, also known as the 'Crow Castle' due to its black exterior, is one of Japan’s most beautiful and historic castles. Surrounded by mountains and a serene moat, it offers a glimpse into Japan's feudal past.",
        image: "/assets/images/Matsumoto_Castle_1.jpg",
        link: "/src/activities/Matsumoto_Castle.html",
        region: "chubu",
        prefecture: "nagano"
    },
    {
        title: "Tsumago-juku: A Traditional Post Town Experience",
        description: "Tsumago-juku is a beautifully preserved post town along the Nakasendo Trail, offering visitors a glimpse into Japan's historical past.",
        image: "/assets/images/Tsumago_juku_1.jpg",
        link: "/src/activities/Tsumago-juku.html",
        region: "chubu",
        prefecture: "nagano"
    },
    {
        title: "Narai Juku: A Traditional Edo Period Post Town",
        description: "Experience the charm of a well-preserved Edo period post town with traditional wooden buildings and a nostalgic atmosphere.",
        image: "/assets/images/Narai_Juku_1.jpg",
        link: "/src/activities/Narai_Juku.html",
        region: "chubu",
        prefecture: "nagano"
    },
    {
        title: "Kamakura Great Buddha",
        description: "Visit the iconic bronze statue of Buddha in Kamakura, Japan, standing at 43 feet tall and surrounded by serene gardens.",
        image: "/assets/images/Kamakura_Great_Buddha_1.jpg",
        link: "/src/activities/Kamakura_Great_Buddha.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Hokokuji Temple - Bamboo Forest",
        description: "Hokokuji Temple is known for its serene bamboo forest, offering a peaceful escape from the bustling city of Kamakura.",
        image: "/assets/images/Hokokuji_Temple_1.jpg",
        link: "/src/activities/Hokokuji_Temple.html",
        region: "kanto",
        prefecture: "kanagawa"
    },

    {
        title: "Enoshima Sea Candle",
        description: "Enoshima Sea Candle is a lighthouse observation deck in Enoshima Island offering stunning views of the surrounding area and Mount Fuji.",
        image: "/assets/images/Enoshima_Sea_Candle_2.jpg",
        link: "/src/activities/Enoshima_Sea_Candle.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Narusawa Ice Cave Adventure",
        description: "Explore the stunning ice formations and natural beauty of Narusawa Ice Cave in Japan.",
        image: "/assets/images/Narusawa_Ice_Cave_1.jpg",
        link: "/src/activities/Narusawa_Ice_Cave.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Himeji Castle",
        description: "Known as the 'White Heron Castle,' Himeji Castle is a UNESCO World Heritage Site and Japan's most famous historic castle.",
        image: "/assets/images/Himeji_Castle_1.jpg",
        link: "/src/activities/Himeji_Castle.html",
        region: "kinki",
        prefecture: "hyogo"
    },
    {
        title: "Forest Adventure",
        description: "Forest Adventure is a network of outdoor adventure parks across Japan, inspired by a concept that originated in France.",
        image: "/assets/images/Forest_Adventure_fixed.png",
        link: "/src/activities/Forest_Adventure.html",
        region: "various",
        prefecture: "various"
    },
    {
        title: "Kerama Islands",
        description: "The Kerama Islands are one of the best destinations in Okinawa for snorkeling, thanks to their crystal-clear waters.",
        image: "/assets/images/KeramaIslands_1.jpeg",
        link: "/src/activities/Snorkeling_in_Kerama.html",
        region: "kyusyu-okinawa",
        prefecture: "okinawa"
    },
    {
        title: "Hitachi Seaside Park",
        description: "Hitachi Seaside Park is a vast national park located in Hitachinaka City, Ibaraki Prefecture.",
        image: "/assets/images/Hitachi_fixed.png",
        link: "/src/activities/Hitachi_Seaside_Park.html",
        region: "kanto",
        prefecture: "ibaraki"
    },

    {
        title: "Hikone Castle",
        description: "A designated National Treasure, Hikone Castle is one of the few original castles in Japan and offers scenic views of Lake Biwa.",
        image: "/assets/images/Hikone_Castle_1.jpg",
        link: "/src/activities/Hikone_Castle.html",
        region: "kinki",
        prefecture: "shiga"
    },

    {
        title: "Inokashira Park",
        description: "Inokashira Park is a beautiful public park in Tokyo known for its scenic pond, cherry blossoms, and proximity to the Ghibli Museum.",
        image: "/assets/images/Inokashira_Park_1.png",
        link: "/src/activities/Inokashira_Park.html",
        region: "kanto",
        prefecture: "tokyo"
    },
    {
        title: "Suzuhiro Kamaboko Museum",
        description: "Suzuhiro Kamaboko Museum is a Japanese food museum where visitors can learn about and experience making traditional fish cakes.",
        image: "/assets/images/Suzuhiro_Kamaboko_Museum_1.png",
        link: "/src/activities/Suzuhiro_Kamaboko_Museum.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Fujiyama Adventure Club",
        description: "Join us at Fujiyama Adventure Club for an exhilarating rafting experience on the beautiful and dynamic rivers of Japan.",
        image: "/assets/images/FujiyamaAdventurePark_1.jpg",
        link: "/src/activities/Fujiyama_Adventure_Club.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Mazda Zoom-Zoom Stadium Hiroshima",
        description: "Mazda Zoom-Zoom Stadium is the home field for the Hiroshima Toyo Carp, known for its fan-friendly design and proximity to the field.",
        image: "/assets/images/Mazda_ZoomZoom_Stadium_1.jpg",
        link: "/src/activities/Mazda_ZoomZoom_Stadium.html",
        region: "chugoku",
        prefecture: "hiroshima"
    },
    {
        title: "Sagami Lake MORI MORI",
        description: "Sagami Lake MORI MORI offers a variety of outdoor activities surrounded by beautiful nature.",
        image: "/assets/images/sagami_lake_mori_mori_3.png",
        link: "/src/activities/MORI_MORI.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Rakuten Mobile Park Miyagi",
        description: "Rakuten Mobile Park Miyagi is the home stadium of the Tohoku Rakuten Golden Eagles, offering a fantastic experience for fans with modern amenities and a great atmosphere.",
        image: "/assets/images/rakuten_mobile_park_miyagi_1.jpg",
        link: "/src/activities/rakuten_mobile_park_miyagi.html",
        region: "tohoku",
        prefecture: "miyagi"
    },
    {
        title: "Shirakawa Village - A UNESCO World Heritage Site",
        description: "Experience the charm of traditional Gassho-style houses in this picturesque village nestled in the Japanese Alps.",
        image: "/assets/images/Shirakawa_Village_1.jpg",
        link: "/src/activities/Shirakawa_Village.html",
        region: "chubu",
        prefecture: "gifu"
    },
    {
        title: "Fuji-Q Highland",
        description: "Fuji-Q Highland is renowned for its thrilling attractions set against the stunning backdrop of Mount Fuji.",
        image: "/assets/images/Fujikyu_fixed.png",
        link: "/src/activities/Fujikyu.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Mount Fuji (Mt. Fuji)",
        description: "Climbing Mt. Fuji is a popular activity among international tourists, and it typically takes two days and one night.",
        image: "/assets/images/Mount_Fuji_1.png",
        link: "/src/activities/Mount_Fuji.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Oshino Shinobi no Sato",
        description: "Oshino Shinobi no Sato is a NINJA-themed park located at the base of Mt. Fuji, especially popular with families and visitors interested in ninja culture.",
        image: "/assets/images/Oshino_Ninja_1.png",
        link: "/src/activities/Oshino_Ninja.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Odawara Castle",
        description: "Odawara Castle offers a glimpse into Japan’s samurai past with its well-preserved architecture and scenic views.",
        image: "/assets/images/Odawara_Castle_1.jpg",
        link: "/src/activities/Odawara_Castle.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Sarugakyo Bungy Jump",
        description: "Experience the thrill of bungee jumping in the beautiful Sarugakyo area surrounded by nature.",
        image: "/assets/images/Sarugakyo_Bungy_1.jpg",
        link: "/src/activities/Sarugakyo_Bungy.html",
        region: "kanto",
        prefecture: "gunma"
    },
    {
        title: "Takachiho Gorge: A Natural Wonder",
        description: "Takachiho Gorge is a breathtaking canyon in Japan known for its stunning waterfalls and lush greenery, perfect for nature lovers and hikers.",
        image: "/assets/images/Takachiho_Gorge_1.jpg",
        link: "/src/activities/Takachiho_Gorge.html",
        region: "kyusyu-okinawa",
        prefecture: "miyazaki"
    },
    {
        title: "Tottori Sand Dunes",
        description: "Experience Japan's largest sand dunes located in Tottori prefecture, offering stunning views and outdoor activities.",
        image: "/assets/images/Tottori_Sand_Dunes_1.jpg",
        link: "/src/activities/Tottori_Sand_Dunes.html",
        region: "chugoku",
        prefecture: "tottori"
    },
    {
        title: "Hakone Glass Forest Museum",
        description: "Experience the beauty of glass art in a serene forest setting at Hakone Glass Forest Museum.",
        image: "/assets/images/Hakone_Glass_Forest_Museum_1.jpg",
        link: "/src/activities/Hakone_Glass_Forest_Museum.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Ashinoko Lake",
        description: "Enjoy stunning views of Mount Fuji while cruising on this beautiful lake located in Hakone, Japan.",
        image: "/assets/images/Ashinoko_Lake_1.jpg",
        link: "/src/activities/Ashinoko_Lake.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Gora Park: A Nature Lover's Paradise",
        description: "Gora Park is a beautiful botanical garden located in the heart of the city, offering serene greenery and stunning floral displays.",
        image: "/assets/images/Gora_Park_1.jpg",
        link: "/src/activities/Gora_Park.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Hakone Open Air Museum",
        description: "Explore a unique outdoor museum featuring a diverse collection of sculptures and art installations in the beautiful surroundings of Hakone.",
        image: "/assets/images/Hakone_Open_Air_Museum_1.jpg",
        link: "/src/activities/Hakone_Open_Air_Museum.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Ghibli Park",
        description: "Ghibli Park is a theme park centered around the worlds of Studio Ghibli films, offering a unique space to experience the charm of the movies.",
        image: "/assets/images/Ghibli_Park_3.png",
        link: "/src/activities/Ghibli_Park.html",
        region: "chubu",
        prefecture: "aichi"
    },
    {
        title: "Ghibli Museum",
        description: "The Ghibli Museum is a museum themed around the works of Studio Ghibli, offering a unique experience of the film's world.",
        image: "/assets/images/Ghibli_Museum_2.png",
        link: "/src/activities/Ghibli_Museum.html",
        region: "kanto",
        prefecture: "tokyo"
    },
    {
        title: "Pola Museum of Art",
        description: "Experience a world-class collection of art in a stunning architectural setting at the Pola Museum of Art.",
        image: "/assets/images/Pola_Museum_of_Art_1.jpg",
        link: "/src/activities/Pola_Museum_of_Art.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Mystical Owakudani Valley",
        description: "Owakudani Valley is a volcanic valley known for its hot springs, sulfur vents, and stunning views of Mount Fuji.",
        image: "/assets/images/Owakudani_Valley_1.jpg",
        link: "/src/activities/Owakudani_Valley.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Sengokuhara Susuki Grassland",
        description: "Experience the beauty of the vast golden susuki grass fields in Sengokuhara, Japan, offering a serene escape from the bustling city life.",
        image: "/assets/images/Sengokuhara_Susuki_Grassland_1.jpg",
        link: "/src/activities/Sengokuhara_Susuki_Grassland.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Zoorasia",
        description: "Zoorasia is a large zoo in Yokohama known for its naturalistic animal exhibits and rare species like the okapi and Sumatran tiger.",
        image: "/assets/images/Zoorasia_0.png",
        link: "/src/activities/Zoorasia.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Hakone Ropeway Adventure",
        description: "Experience breathtaking views of Mount Fuji and Lake Ashi while riding the Hakone Ropeway, a scenic cable car journey in Hakone, Japan.",
        image: "/assets/images/Hakone_Ropeway_1.jpg",
        link: "/src/activities/Hakone_Ropeway.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Historic Old Hakone Road",
        description: "Experience the beauty and history of Japan as you walk along the ancient Old Hakone Road, lined with traditional tea houses and stunning views of Mount Fuji.",
        image: "/assets/images/Old_Hakone_Road_1.jpg",
        link: "/src/activities/Old_Hakone_Road.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Hakone Checkpoint - Gateway to Edo",
        description: "Step back in time at Hakone Checkpoint, a historic checkpoint on the old Tokaido Highway, offering a glimpse into Japan's feudal past.",
        image: "/assets/images/Hakone_Checkpoint_1.jpg",
        link: "/src/activities/Hakone_Checkpoint.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Lake Ashi Cruise",
        description: "Enjoy a scenic boat ride on Lake Ashi with stunning views of Mt. Fuji and Hakone's natural beauty.",
        image: "/assets/images/Ashinoko_Cruise_1.jpg",
        link: "/src/activities/Ashinoko_Cruise.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Sagamihara Prefectural Park - A Nature Lover's Paradise",
        description: "Sagamihara Prefectural Park offers lush greenery, beautiful gardens, and tranquil walking paths for visitors to enjoy.",
        image: "/assets/images/Sagamihara_Prefectural_Park_1.jpg",
        link: "/src/activities/Sagamihara_Prefectural_Park.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Sagamihara Asamizo Park",
        description: "Sagamihara Asamizo Park is a beautiful park with lush greenery, flower gardens, and walking trails, perfect for a relaxing day out in nature.",
        image: "/assets/images/Sagamihara_Asamizo_Park_1.jpg",
        link: "/src/activities/Sagamihara_Asamizo_Park.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Atsugi Nanasawa Forest Park",
        description: "Experience the beauty of nature at Atsugi Nanasawa Forest Park, with lush greenery and peaceful surroundings.",
        image: "/assets/images/Atsugi_Nanasawa_Forest_Park_1.jpg",
        link: "/src/activities/Atsugi_Nanasawa_Forest_Park.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Katase Higashihama Beach",
        description: "Katase Higashihama Beach is a beautiful sandy beach located in Fujisawa City, Japan, known for its clear waters and stunning views of Enoshima Island.",
        image: "/assets/images/Katase_Higashihama_Beach_1.jpg",
        link: "/src/activities/Katase_Higashihama_Beach.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Tsurugaoka Hachimangu Shrine",
        description: "Tsurugaoka Hachimangu is a historic Shinto shrine located in Kamakura, Japan, known for its beautiful architecture and serene atmosphere.",
        image: "/assets/images/Tsurugaoka_Hachimangu_1.jpg",
        link: "/src/activities/Tsurugaoka_Hachimangu.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Zeniarai Benten Shrine",
        description: "Zeniarai Benten Shrine is a popular Shinto shrine in Kamakura, Japan, known for its unique ritual of washing money for good luck.",
        image: "/assets/images/Zeniarai_Benten_Shrine_1.jpg",
        link: "/src/activities/Zeniarai_Benten_Shrine.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Enoshima Iwaya Caves",
        description: "Explore ancient caves formed by volcanic activity on Enoshima Island, offering a unique glimpse into Japan's geological history.",
        image: "/assets/images/Enoshima_Iwaya_Caves_1.jpg",
        link: "/src/activities/Enoshima_Iwaya_Caves.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Enoshima Shrine",
        description: "Enoshima Shrine is a beautiful Shinto shrine located on Enoshima Island, offering stunning views of the ocean and surrounding area.",
        image: "/assets/images/Enoshima_Shrine_1.jpg",
        link: "/src/activities/Enoshima_Shrine.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Komachi Street: A Charming Shopping District",
        description: "Komachi Street is a bustling pedestrian street in Kamakura known for its traditional shops, cafes, and souvenirs.",
        image: "/assets/images/Komachi_Street_1.jpg",
        link: "/src/activities/Komachi_Street.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Hase Temple - A Serene Buddhist Sanctuary",
        description: "Hase Temple is a peaceful Buddhist temple located in Kamakura, Japan, known for its beautiful architecture and tranquil gardens.",
        image: "/assets/images/Hase_Temple_1.jpg",
        link: "/src/activities/Hase_Temple.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Lake Sai: The Hidden Gem of Japan",
        description: "Lake Sai is a picturesque lake located in the heart of Japan, surrounded by lush greenery and offering a serene escape for nature lovers.",
        image: "/assets/images/Lake_Sai_1.jpg",
        link: "/src/activities/Lake_Sai.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Lake Yamanaka - The Jewel of Mount Fuji",
        description: "Lake Yamanaka offers stunning views of Mount Fuji and is a popular destination for fishing, boating, and enjoying the natural beauty of Japan.",
        image: "/assets/images/Lake_Yamanaka_1.jpg",
        link: "/src/activities/Lake_Yamanaka.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Lake Shoji - The Hidden Gem of Japan",
        description: "Lake Shoji is a serene and picturesque lake located at the base of Mount Fuji, offering stunning views and a peaceful atmosphere for visitors to enjoy.",
        image: "/assets/images/Lake_Shoji_1.jpg",
        link: "/src/activities/Lake_Shoji.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Lake Motosu: The Crystal Clear Beauty",
        description: "Lake Motosu is known for its pristine waters and stunning views of Mount Fuji, making it a popular destination for nature lovers and photographers.",
        image: "/assets/images/Lake_Motosu_1.jpg",
        link: "/src/activities/Lake_Motosu.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Lake Kawaguchi: The Jewel of the Five Lakes",
        description: "Lake Kawaguchi is a stunning freshwater lake located near Mount Fuji, offering breathtaking views and a variety of outdoor activities.",
        image: "/assets/images/Lake_Kawaguchi_1.jpg",
        link: "/src/activities/Lake_Kawaguchi.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Mt. Fuji Panoramic Ropeway",
        description: "Experience breathtaking views of Mount Fuji and the surrounding landscape from the comfort of a panoramic ropeway ride.",
        image: "/assets/images/Mt_Fuji_Panoramic_Ropeway_1.jpg",
        link: "/src/activities/Mt_Fuji_Panoramic_Ropeway.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Fugaku Wind Cave",
        description: "Explore the mystical underground world of Fugaku Wind Cave, a natural lava cave formed by the eruption of Mount Fuji.",
        image: "/assets/images/Fugaku_Wind_Cave_1.jpg",
        link: "/src/activities/Fugaku_Wind_Cave.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Arakurayama Sengen Park",
        description: "Arakurayama Sengen Park is a beautiful park located in Fujiyoshida, Japan, known for its stunning views of Mount Fuji and cherry blossoms.",
        image: "/assets/images/Arakurayama_Sengen_Park_1.jpg",
        link: "/src/activities/Arakurayama_Sengen_Park.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Oshino Hakkai Springs",
        description: "Experience the beauty of crystal clear springs surrounded by traditional thatched-roof houses in Oshino Hakkai.",
        image: "/assets/images/Oshino_Hakkai_Springs_1.jpg",
        link: "/src/activities/Oshino_Hakkai_Springs.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Fujisan World Heritage Center",
        description: "Experience the history and beauty of Mount Fuji at the Fujisan World Heritage Center, showcasing the significance of this iconic mountain.",
        image: "/assets/images/Fujisan_World_Heritage_Center_1.jpg",
        link: "/src/activities/Fujisan_World_Heritage_Center.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Shin-Nashogawa Riverside Promenade",
        description: "Enjoy a leisurely stroll along the picturesque Shin-Nashogawa Riverside Promenade, offering stunning views of the river and surrounding nature.",
        image: "/assets/images/Shin-Nashogawa_Riverside_Promenade_1.jpg",
        link: "/src/activities/Shin-Nashogawa_Riverside_Promenade.html",
        region: "chubu",
        prefecture: "yamanashi"
    },
    {
        title: "Es Con Field Hokkaido",
        description: "Es Con Field Hokkaido is a modern baseball stadium and the home field for the Hokkaido Nippon-Ham Fighters.",
        image: "/assets/images/Es_Con_Field1.png",
        link: "/src/activities/Es_Con_Field.html",
        region: "hokkaido",
    },
    {
        title: "Izu Granpal Park",
        description: "Izu Granpal Park is a family-friendly amusement park located in Izu, Japan, offering a variety of rides and attractions for visitors of all ages.",
        image: "/assets/images/Izu_Granpal_Park_1.jpg",
        link: "/src/activities/Izu_Granpal_Park.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Atami Plum Garden",
        description: "Explore the beauty of blooming plum trees in Atami Plum Garden, a serene and picturesque tourist attraction.",
        image: "/assets/images/Atami_Plum_Garden_1.jpg",
        link: "/src/activities/Atami_Plum_Garden.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Jogasaki Coast",
        description: "Jogasaki Coast offers stunning views of rugged cliffs, clear blue waters, and picturesque walking trails along the Pacific Ocean in Japan.",
        image: "/assets/images/Jogasaki_Coast_1.jpg",
        link: "/src/activities/Jogasaki_Coast.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Atami Sun Beach",
        description: "Atami Sun Beach is a beautiful sandy beach located in Atami, Japan, offering stunning views of the ocean and a relaxing atmosphere for visitors.",
        image: "/assets/images/Atami_Sun_Beach_1.jpg",
        link: "/src/activities/Atami_Sun_Beach.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Kinomiya Shrine",
        description: "Kinomiya Shrine is a historic Shinto shrine located in Atami, Japan, known for its ancient camphor tree that is said to be over 2,000 years old.",
        image: "/assets/images/Kinomiya_Shrine_1.jpg",
        link: "/src/activities/Kinomiya_Shrine.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "New York Lamp Museum Flower Garden",
        description: "Experience a unique blend of art and nature at the New York Lamp Museum Flower Garden, where beautiful flowers surround exquisite lamp displays.",
        image: "/assets/images/New_York_Lamp_Museum_Flower_Garden_1.jpg",
        link: "/src/activities/New_York_Lamp_Museum_Flower_Garden.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Kawazu Seven Waterfalls",
        description: "Experience the beauty of nature as you explore seven stunning waterfalls in Kawazu, Japan.",
        image: "/assets/images/Kawazu_Seven_Waterfalls_1.jpg",
        link: "/src/activities/Kawazu_Seven_Waterfalls.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Mt. Omuro - The Perfect Cone Volcano",
        description: "Mt. Omuro is a stunning volcanic cone with a well-defined shape, offering panoramic views of the surrounding area.",
        image: "/assets/images/Mt_Omuro_1.jpg",
        link: "/src/activities/Mt_Omuro.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Hatsushima Island Paradise",
        description: "Hatsushima Island is a picturesque island known for its beautiful beaches, clear waters, and stunning views, making it a perfect destination for relaxation and water activities.",
        image: "/assets/images/Hatsushima_Island_1.jpg",
        link: "/src/activities/Hatsushima_Island.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Komuroyama Ridge Walk Misora",
        description: "Experience breathtaking views of nature while hiking along the scenic Komuroyama Ridge Walk Misora.",
        image: "/assets/images/Komuroyama_Ridge_Walk_Misora_1.jpg",
        link: "/src/activities/Komuroyama_Ridge_Walk_Misora.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Izusan Shrine: A Sacred Place with Breathtaking Views",
        description: "Izusan Shrine, located in Atami, Japan, is a historic Shinto shrine known for its stunning views of the Pacific Ocean and surrounding mountains.",
        image: "/assets/images/Izusan_Shrine_1.jpg",
        link: "/src/activities/Izusan_Shrine.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Atami Castle",
        description: "Atami Castle is a historic Japanese castle located in Atami, Shizuoka Prefecture, offering beautiful views of the city and the ocean.",
        image: "/assets/images/Atami_Castle_1.jpg",
        link: "/src/activities/Atami_Castle.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Hakone Mototsumiya Shrine",
        description: "Experience the serene beauty and historical significance of Hakone Mototsumiya Shrine, nestled in the lush greenery of Hakone, Japan.",
        image: "/assets/images/Hakone_Mototsumiya_Shrine_1.jpg",
        link: "/src/activities/Hakone_Mototsumiya_Shrine.html",
        region: "kanto",
        prefecture: "kanagawa"
    },
    {
        title: "Magome-juku: A Quaint Edo-period Post Town",
        description: "Experience the charm of Magome-juku, a beautifully preserved Edo-period post town nestled in the mountains of Japan.",
        image: "/assets/images/Magome_juku_1.jpg",
        link: "/src/activities/Magome-juku.html",
        region: "chubu",
        prefecture: "gifu"
    },

    {
        title: "Seibu-en Amusement Park",
        description: "Experience thrilling rides and attractions at Seibu-en Amusement Park, perfect for a fun day out with family and friends.",
        image: "/assets/images/Seibu-en_Amusement_Park_1.jpg",
        link: "/src/activities/Seibu-en_Amusement_Park.html",
        region: "kanto",
        prefecture: "saitama"
    },
    {
        title: "Tokorozawa Aviation Memorial Park",
        description: "Explore the rich history of aviation in Japan at this unique park featuring vintage aircraft displays and interactive exhibits.",
        image: "/assets/images/Tokorozawa_Aviation_Memorial_Park_1.jpg",
        link: "/src/activities/Tokorozawa_Aviation_Memorial_Park.html",
        region: "kanto",
        prefecture: "saitama"
    },
    {
        title: "Japanese Tea Experience in Sayama",
        description: "Immerse yourself in the traditional art of Japanese tea ceremony in the serene setting of Sayama, where you can learn about the history and culture of tea in Japan.",
        image: "/assets/images/Japanese_Tea_Experience_Sayama_1.jpg",
        link: "/src/activities/Japanese_Tea_Experience_Sayama.html",
        region: "kanto",
        prefecture: "saitama"
    },
    {
        title: "Kiga Checkpoint",
        description: "Experience the history and culture of feudal Japan at Kiga-Sekisho, a well-preserved checkpoint from the Edo period.",
        image: "/assets/images/Kiga_Sekisho_1.jpg",
        link: "/src/activities/Kiga_Sekisho.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Arai Checkpoint",
        description: "Arai-Sekisho is a historic checkpoint along the old Hokkoku Kaido highway in Japan, offering a glimpse into the country's feudal past.",
        image: "/assets/images/Arai_Sekisho_1.jpg",
        link: "/src/activities/Arai_Sekisho.html",
        region: "chubu",
        prefecture: "shizuoka"
    },
    {
        title: "Kiso Fukushima Sekisho",
        description: "Experience the historic checkpoint that once controlled traffic on the Nakasendo highway during the Edo period in Japan.",
        image: "/assets/images/Kiso_Fukushima_Sekisho_1.jpg",
        link: "/src/activities/Kiso_Fukushima_Sekisho.html",
        region: "chubu",
        prefecture: "nagano"
    },
    {
        title: "Nozawa Onsen: Traditional Hot Spring Village",
        description: "Nozawa Onsen is a charming village known for its traditional hot springs, ski resorts, and cultural experiences.",
        image: "/assets/images/Nozawa_Onsen_1.jpg",
        link: "/src/activities/Nozawa_Onsen.html",
        region: "chubu",
        prefecture: "nagano"
    },
    {
        title: "Suwa Lake: A Serene Escape",
        description: "Suwa Lake, located in the heart of Japan, offers breathtaking views and a peaceful atmosphere perfect for relaxation and recreation.",
        image: "/assets/images/Suwa_Lake_1.jpg",
        link: "/src/activities/Suwa_Lake.html",
        region: "chubu",
        prefecture: "nagano"
    },
    {
        title: "Ueda Castle",
        description: "Ueda Castle is a historic castle located in Nagano Prefecture, Japan, known for its beautiful architecture and scenic views.",
        image: "/assets/images/Ueda_Castle_1.jpg",
        link: "/src/activities/Ueda_Castle.html",
        region: "chubu",
        prefecture: "nagano"
    },
    {
        title: "Zenkōji Temple: A Spiritual Haven in Nagano",
        description: "Zenkōji Temple is a historic Buddhist temple known for its sacred atmosphere and hidden Buddha statue. Visitors can explore the temple grounds and experience traditional rituals.",
        image: "/assets/images/Zenkōji_Temple_1.jpg",
        link: "/src/activities/Zenkōji_Temple.html",
        region: "chubu",
        prefecture: "nagano"
    }
    ,
    {
        title: "Oirase Gorge: A Scenic Nature Walk",
        description: "Oirase Gorge is a picturesque river valley in Aomori Prefecture, famous for its crystal-clear stream, lush forests, and beautiful waterfalls along a well-maintained walking trail.",
        image: "/assets/images/Oirase_Gorge_1.jpg",
        link: "/src/activities/Oirase_Gorge.html",
        region: "tohoku",
        prefecture: "aomori"
    }
    ,
    {
        title: "Risshakuji Temple (Yamadera): A Spiritual Mountain Retreat",
        description: "Risshakuji Temple, also known as Yamadera, is a historic temple perched on a mountainside in Yamagata Prefecture, offering breathtaking views and a serene atmosphere after climbing its scenic stone steps.",
        image: "/assets/images/Risshakuji_Temple_1.jpg",
        link: "/src/activities/Risshakuji_Temple.html",
        region: "tohoku",
        prefecture: "yamagata"
    }
    ,
    {
        title: "Lake Tazawa: Japan's Deepest Mystical Lake",
        description: "Lake Tazawa, located in Akita Prefecture, is Japan's deepest lake, renowned for its clear blue waters, scenic beauty, and the legendary statue of Tatsuko on its shore.",
        image: "/assets/images/Lake_Tazawa_1.jpg",
        link: "/src/activities/Lake_Tazawa.html",
        region: "tohoku",
        prefecture: "akita"
    }
    ,
    {
        title: "Hirosaki Castle: A Symbol of Northern Japan",
        description: "Hirosaki Castle, located in Aomori Prefecture, is a historic castle renowned for its beautiful cherry blossoms, impressive stone walls, and scenic park grounds, especially stunning during spring.",
        image: "/assets/images/Hirosaki_Castle_1.jpg",
        link: "/src/activities/Hirosaki_Castle.html",
        region: "tohoku",
        prefecture: "aomori"
    }
];
// ブラウザでは window.activities にセット
if (typeof window !== "undefined") {
    window.activities = activities;
}

// Node.js ではモジュールとしてエクスポート
if (typeof module !== "undefined" && module.exports) {
    module.exports = activities;
}