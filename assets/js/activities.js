const activities = [
    {
        title: "Fuji-Q Highland",
        description: "Fuji-Q Highland is renowned for its thrilling attractions set against the stunning backdrop of Mount Fuji.",
        image: "/assets/images/Fujikyu_fixed.png",
        link: "/src/activities/Fujikyu.html"
    },
    {
        title: "Odawara Castle",
        description: "Odawara Castle offers a glimpse into Japan’s samurai past with its well-preserved architecture and scenic views.",
        image: "/assets/images/Odawara_Castle_1.jpg",
        link: "/src/activities/Odawara_Castle.html"
    },
    {
        title: "Matsumoto Castle",
        description: "Matsumoto Castle, also known as the 'Crow Castle' due to its black exterior, is one of Japan’s most beautiful and historic castles. Surrounded by mountains and a serene moat, it offers a glimpse into Japan's feudal past.",
        image: "/assets/images/Matsumoto_Castle_1.jpg",
        link: "/src/activities/Matsumoto_Castle.html"
    },
    {
        title: "Hitachi Seaside Park",
        description: "Hitachi Seaside Park is a vast national park located in Hitachinaka City, Ibaraki Prefecture.",
        image: "/assets/images/Hitachi_fixed.png",
        link: "/src/activities/Hitachi_Seaside_Park.html"
    },
    {
        title: "Forest Adventure",
        description: "Forest Adventure is a network of outdoor adventure parks across Japan, inspired by a concept that originated in France.",
        image: "/assets/images/Forest_Adventure_fixed.png",
        link: "/src/activities/Forest_Adventure.html"
    },
    {
        title: "Kerama Islands",
        description: "The Kerama Islands are one of the best destinations in Okinawa for snorkeling, thanks to their crystal-clear waters.",
        image: "/assets/images/KeramaIslands_1.jpeg",
        link: "/src/activities/Snorkeling_in_Kerama.html"
    },
    {
        title: "Himeji Castle",
        description: "Known as the 'White Heron Castle,' Himeji Castle is a UNESCO World Heritage Site and Japan's most famous historic castle.",
        image: "/assets/images/Himeji_Castle_1.jpg",
        link: "/src/activities/Himeji_Castle.html"
    },
    {
        title: "Hikone Castle",
        description: "A designated National Treasure, Hikone Castle is one of the few original castles in Japan and offers scenic views of Lake Biwa.",
        image: "/assets/images/Hikone_Castle_1.jpg",
        link: "/src/activities/Hikone_Castle.html"
    },
    {
        title: "Zoorasia",
        description: "Zoorasia is a large zoo in Yokohama known for its naturalistic animal exhibits and rare species like the okapi and Sumatran tiger.",
        image: "/assets/images/Zoorasia_0.png",
        link: "/src/activities/Zoorasia.html"
    },
    {
        title: "Mount Fuji (Mt. Fuji)",
        description: "Climbing Mt. Fuji is a popular activity among international tourists, and it typically takes two days and one night.",
        image: "/assets/images/Mount_Fuji_1.png",
        link: "/src/activities/Mount_Fuji.html"
    },
    {
        title: "Oshino Shinobi no Sato",
        description: "Oshino Shinobi no Sato is a NINJA-themed park located at the base of Mt. Fuji, especially popular with families and visitors interested in ninja culture.",
        image: "/assets/images/Oshino_Ninja_1.png",
        link: "/src/activities/Oshino_Ninja.html"
    },
    {
        title: "Belluna Dome",
        description: "Belluna Dome, located in Saitama, is the unique home of the Saitama Seibu Lions, known for its retractable roof and natural surroundings.",
        image: "/assets/images/Belluna_Dome_1.jpg",
        link: "/src/activities/Belluna_Dome.html"
    },
    {
        title: "Ghibli Park",
        description: "Ghibli Park is a theme park centered around the worlds of Studio Ghibli films, offering a unique space to experience the charm of the movies.",
        image: "/assets/images/Ghibli_Park_3.png",
        link: "/src/activities/Ghibli_Park.html"
    },
    {
        title: "Ghibli Museum",
        description: "The Ghibli Museum is a museum themed around the works of Studio Ghibli, offering a unique experience of the film's world.",
        image: "/assets/images/Ghibli_Museum_2.png",
        link: "/src/activities/Ghibli_Museum.html"
    },
    {
        title: "Inokashira Park",
        description: "Inokashira Park is a beautiful public park in Tokyo known for its scenic pond, cherry blossoms, and proximity to the Ghibli Museum.",
        image: "/assets/images/Inokashira_Park_1.png",
        link: "/src/activities/Inokashira_Park.html"
    },
    {
        title: "Suzuhiro Kamaboko Museum",
        description: "Suzuhiro Kamaboko Museum is a Japanese food museum where visitors can learn about and experience making traditional fish cakes.",
        image: "/assets/images/Suzuhiro_Kamaboko_Museum_1.png",
        link: "/src/activities/Suzuhiro_Kamaboko_Museum.html"
    },
    {
        title: "Fujiyama Adventure Club",
        description: "Join us at Fujiyama Adventure Club for an exhilarating rafting experience on the beautiful and dynamic rivers of Japan.",
        image: "/assets/images/FujiyamaAdventurePark_1.jpg",
        link: "/src/activities/Fujiyama_Adventure_Club.html"
    },
    {
        title: "Es Con Field Hokkaido",
        description: "Es Con Field Hokkaido is a modern baseball stadium and the home field for the Hokkaido Nippon-Ham Fighters.",
        image: "/assets/images/Es_Con_Field1.png",
        link: "/src/activities/Es_Con_Field.html"
    },
    {
        title: "Mazda Zoom-Zoom Stadium Hiroshima",
        description: "Mazda Zoom-Zoom Stadium is the home field for the Hiroshima Toyo Carp, known for its fan-friendly design and proximity to the field.",
        image: "/assets/images/Mazda_ZoomZoom_Stadium_1.jpg",
        link: "/src/activities/Mazda_ZoomZoom_Stadium.html"
    },
    {
        title: "Sagami Lake MORI MORI",
        description: "Sagami Lake MORI MORI offers a variety of outdoor activities surrounded by beautiful nature.",
        image: "/assets/images/MORI_MORI_fixed.png",
        link: "/src/activities/MORI_MORI.html"
    },
    {
        title: "Rakuten Mobile Park Miyagi",
        description: "Rakuten Mobile Park Miyagi is the home stadium of the Tohoku Rakuten Golden Eagles, offering a fantastic experience for fans with modern amenities and a great atmosphere.",
        image: "/assets/images/rakuten_mobile_park_miyagi_1.jpg",
        link: "/src/activities/rakuten_mobile_park_miyagi.html"
    },
    {
        title: "Shirakawa Village - A UNESCO World Heritage Site",
        description: "Experience the charm of traditional Gassho-style houses in this picturesque village nestled in the Japanese Alps.",
        image: "/assets/images/Shirakawa_Village_1.jpg",
        link: "/src/activities/Shirakawa_Village.html"
    },
    {
        title: "Narai Juku: A Traditional Edo Period Post Town",
        description: "Experience the charm of a well-preserved Edo period post town with traditional wooden buildings and a nostalgic atmosphere.",
        image: "/assets/images/Narai_Juku_1.jpg",
        link: "/src/activities/Narai_Juku.html"
    },
    {
        title: "Sarugakyo Bungy Jump",
        description: "Experience the thrill of bungee jumping in the beautiful Sarugakyo area surrounded by nature.",
        image: "/assets/images/Sarugakyo_Bungy_1.jpg",
        link: "/src/activities/Sarugakyo_Bungy.html"
    },
    {
        title: "Takachiho Gorge: A Natural Wonder",
        description: "Takachiho Gorge is a breathtaking canyon in Japan known for its stunning waterfalls and lush greenery, perfect for nature lovers and hikers.",
        image: "/assets/images/Takachiho_Gorge_1.jpg",
        link: "/src/activities/Takachiho_Gorge.html"
    },
    {
        title: "Tottori Sand Dunes",
        description: "Experience Japan's largest sand dunes located in Tottori prefecture, offering stunning views and outdoor activities.",
        image: "/assets/images/Tottori_Sand_Dunes_1.jpg",
        link: "/src/activities/Tottori_Sand_Dunes.html"
    },
    {
        title: "Hakone Glass Forest Museum",
        description: "Experience the beauty of glass art in a serene forest setting at Hakone Glass Forest Museum.",
        image: "/assets/images/Hakone_Glass_Forest_Museum_1.jpg",
        link: "/src/activities/Hakone_Glass_Forest_Museum.html"
    },
    {
        title: "Ashinoko Lake",
        description: "Enjoy stunning views of Mount Fuji while cruising on this beautiful lake located in Hakone, Japan.",
        image: "/assets/images/Ashinoko_Lake_1.jpg",
        link: "/src/activities/Ashinoko_Lake.html"
    },
    {
        title: "Hakone Shrine: A Serene Oasis",
        description: "Hakone Shrine is a peaceful Shinto shrine located by Lake Ashi, surrounded by lush greenery and offering stunning views of Mount Fuji.",
        image: "/assets/images/Hakone_Shrine_1.jpg",
        link: "/src/activities/Hakone_Shrine.html"
    },
    {
        title: "Gora Park: A Nature Lover's Paradise",
        description: "Gora Park is a beautiful botanical garden located in the heart of the city, offering serene greenery and stunning floral displays.",
        image: "/assets/images/Gora_Park_1.jpg",
        link: "/src/activities/Gora_Park.html"
    },
    {
        title: "Hakone Open Air Museum",
        description: "Explore a unique outdoor museum featuring a diverse collection of sculptures and art installations in the beautiful surroundings of Hakone.",
        image: "/assets/images/Hakone_Open_Air_Museum_1.jpg",
        link: "/src/activities/Hakone_Open_Air_Museum.html"
    },
    {
        title: "Pola Museum of Art",
        description: "Experience a world-class collection of art in a stunning architectural setting at the Pola Museum of Art.",
        image: "/assets/images/Pola_Museum_of_Art_1.jpg",
        link: "/src/activities/Pola_Museum_of_Art.html"
    },
    {
        title: "Mystical Owakudani Valley",
        description: "Owakudani Valley is a volcanic valley known for its hot springs, sulfur vents, and stunning views of Mount Fuji.",
        image: "/assets/images/Owakudani_Valley_1.jpg",
        link: "/src/activities/Owakudani_Valley.html"
    },
    {
        title: "Sengokuhara Susuki Grassland",
        description: "Experience the beauty of the vast golden susuki grass fields in Sengokuhara, Japan, offering a serene escape from the bustling city life.",
        image: "/assets/images/Sengokuhara_Susuki_Grassland_1.jpg",
        link: "/src/activities/Sengokuhara_Susuki_Grassland.html"
    },
    {
        title: "Hakone Ropeway Adventure",
        description: "Experience breathtaking views of Mount Fuji and Lake Ashi while riding the Hakone Ropeway, a scenic cable car journey in Hakone, Japan.",
        image: "/assets/images/Hakone_Ropeway_1.jpg",
        link: "/src/activities/Hakone_Ropeway.html"
    },
    {
        title: "Historic Old Hakone Road",
        description: "Experience the beauty and history of Japan as you walk along the ancient Old Hakone Road, lined with traditional tea houses and stunning views of Mount Fuji.",
        image: "/assets/images/Old_Hakone_Road_1.jpg",
        link: "/src/activities/Old_Hakone_Road.html"
    }

];
module.exports = activities;