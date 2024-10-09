// قائمة المكافآت ونسب السحب
const rewards = [
  // المكافآت الشائعة
  { name: "بطاطس ليز جبن", rarity: "common", chance: 25 },
  { name: "بطاطس ليز حار", rarity: "common", chance: 20 },
  { name: "بطاطس سيرلنكا", rarity: "common", chance: 10 },
  { name: "بطاطس تشيتوس", rarity: "common", chance: 10 },
  { name: "ملعقة عسل", rarity: "common", chance: 10 },
  { name: "تمرة", rarity: "common", chance: 10 },
  { name: "كأس حليب", rarity: "common", chance: 10 },

  // المكافآت النادرة
  { name: "بطاطس عمان", rarity: "rare", chance: 10 },
  { name: "بسكوت اعواد الشوكولاته", rarity: "rare", chance: 7 },
  { name: "بطاطس ليز جبن + حار", rarity: "rare", chance: 8 },

  // المكافآت الأسطورية
  { name: "15 ريال", rarity: "legendary", chance: 5 },
  { name: "تشيز كيك من سعد الدين", rarity: "legendary", chance: 5 }
];

// الوظيفة التي تقوم بالسحب
function getRandomReward() {
  const random = Math.random() * 100;
  let accumulatedChance = 0;

  for (const reward of rewards) {
    accumulatedChance += reward.chance;
    if (random <= accumulatedChance) {
      return reward.name;
    }
  }
}

// التعامل مع الضغط على زر السحب
document.getElementById("gachaButton").addEventListener("click", function() {
  const reward = getRandomReward();
  document.getElementById("rewardDisplay").innerText = `حصلت على: ${reward}`;
});
