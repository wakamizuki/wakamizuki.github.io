import MarkdownViewer from "@/lib/components/shared/markdown_viewer/MarkdownViewer";

const markdown = `
# Matsumoto Castle – National Treasure of Japan

## Overview
---

Matsumoto Castle, one of Japan’s most iconic original castles, is known for its striking
black exterior, earning it the nickname “Crow Castle.” Built in the late 16th century,
it stands as a National Treasure of Japan. Visitors can explore the interior wooden
structure, climb steep stairs to the top, and enjoy panoramic views of the Japanese
Alps. It’s a perfect blend of history, architecture, and scenic beauty.

Matsumoto Castle is not only a stunning national treasure, but also a convenient gateway
to explore nearby historic
destinations such as
[Narai-juku](/src/activities/Narai_Juku.html),
[Tsumago-juku](/src/activities/Tsumago-juku.html),
and
[Magome-juku](/src/activities/Magome-juku.html).
Its location makes it a great starting point for discovering the charm of Japan’s
countryside and Edo-period post
towns.

For travelers coming from Tokyo, the direct highway bus to Matsumoto Station makes
visiting the castle both easy and
comfortable — a perfect first stop before heading deeper into the Kiso Valley.

## Access to Matsumoto Castle by TRAIN or Highway Bus (Last updated: May 9, 2025)
---

The easiest way to reach Matsumoto Castle is by train. Take the JR Chuo Line (Ltd.
Express Azusa) from Shinjuku (Tokyo) or the JR Chuo Main Line from Nagoya to Matsumoto
Station. The castle is about a 15-minute walk from the station.

## How to Get to Matsumoto Castle from Major Cities

| Departure City         | Route                                                                                               | Estimated Time     | Estimated Cost      |
|------------------------|-----------------------------------------------------------------------------------------------------|--------------------|----------------------|
| **Tokyo (Shinjuku)**   | JR Chuo Line (Ltd. Express Azusa) → Matsumoto Station → Walk to Castle                             | About 2.5–3 hours  | ¥6,000–¥7,000        |
| Tokyo (Shinjuku)       | Highway Bus (Alpico or Keio Bus) from Busta Shinjuku → Matsumoto Bus Terminal → Walk to Castle     | About 3.5–4 hours  | ¥3,500–¥4,500        |
| Nagoya                 | JR Chuo Main Line (Ltd. Express Shinano) → Matsumoto Station → Walk to Castle                      | About 2 hours      | ¥5,500–¥6,500        |
| Osaka                  | Shinkansen to Nagoya → JR Chuo Main Line (Ltd. Express Shinano) → Matsumoto Station → Walk         | About 4 hours      | ¥11,000–¥13,000      |
`;

export default function ArticlePage() {
  return (
    <div>
      <MarkdownViewer markdown={markdown} />
    </div>
  );
}
