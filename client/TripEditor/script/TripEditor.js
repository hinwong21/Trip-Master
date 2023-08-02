let marker, map;

const iconByType = {
  Exhibition: {
    url: "../uploads/ExhibitionDot.png",
    scaledSize: new google.maps.Size(50, 50),
  },
  Visit: {
    url: "../uploads/VisitDot.png",
    scaledSize: new google.maps.Size(50, 50),
  },
  Food: {
    url: "../uploads/FoodDot.png",
    scaledSize: new google.maps.Size(50, 50),
  },
  Hotel: {
    url: "../uploads/HotelDot.png",
    scaledSize: new google.maps.Size(50, 50),
  },
  Nature: {
    url: "../uploads/NatureDot.png",
    scaledSize: new google.maps.Size(50, 50),
  },
  Shopping: {
    url: "../uploads/ShoppingDot.png",
    scaledSize: new google.maps.Size(50, 50),
  },
};

// call the saved location to the map
const markers = [
  {
    position: { lat: 25.045488958061224, lng: 121.51568649748022 },
    title: "B&B",
    type: "Hotel",
    travelDate: 21,
  },
  {
    position: { lat: 25.072508978855105, lng: 121.52482361103843 },
    title: "臺北市立美術館",
    type: "Exhibition",
    travelDate: "",
  },
  {
    position: { lat: 25.08312621861806, lng: 121.55776985336895 },
    title: "美麗華百樂園摩天輪",
    type: "Visit",
    travelDate: 19,
  },
  {
    position: { lat: 25.056313082122248, lng: 121.50737956156857 },
    title: "大稻埕碼頭貨櫃市集",
    type: "Visit",
    travelDate: 20,
  },
  {
    position: { lat: 25.058690138518354, lng: 121.50962778213847 },
    title: "迪化街",
    type: "Visit",
    travelDate: 20,
  },
  {
    position: { lat: 25.037001188360637, lng: 121.50212163795992 },
    title: "剝皮寮歷史街區",
    type: "Visit",
    travelDate: "",
  },
  {
    position: { lat: 25.05563965531729, lng: 121.51962979563156 },
    title: "中山赤峰街",
    type: "Visit",
    travelDate: "",
  },
  {
    position: { lat: 25.010679395566868, lng: 121.53247481244351 },
    title: "公館寶藏巖",
    type: "Visit",
    travelDate: "",
  },
  {
    position: { lat: 25.05096914818989, lng: 121.5192051974804 },
    title: "當代藝術館",
    type: "Exhibition",
    travelDate: "",
  },
  {
    position: { lat: 25.042952421757697, lng: 121.51515138213794 },
    title: "國立台灣博物館",
    type: "Exhibition",
    travelDate: "",
  },
  {
    position: { lat: 25.096032330274145, lng: 121.5183740244686 },
    title: "士林天文館",
    type: "Exhibition",
    travelDate: "",
  },
  {
    position: { lat: 25.136565944117653, lng: 121.50630162447005 },
    title: "臺北市立圖書館 北投分館",
    type: "Exhibition",
    travelDate: "",
  },
  {
    position: { lat: 25.03735601852688, lng: 121.49986245598117 },
    title: "龍山寺",
    type: "Visit",
    travelDate: "",
  },
  {
    position: { lat: 25.07548337193714, lng: 121.56086729563235 },
    title: "美堤河濱公園",
    type: "Visit",
    travelDate: "",
  },
  {
    position: { lat: 25.05132228668042, lng: 121.54976148213822 },
    title: "大魯閣Roller186滑輪場 小巨蛋館",
    type: "Visit",
    travelDate: "",
  },
  {
    position: { lat: 25.028319165738136, lng: 121.50609483823503 },
    title: "臭老闆現蒸臭豆腐",
    type: "Food",
    travelDate: 20,
  },
  {
    position: { lat: 25.044564760379433, lng: 121.54498882631572 },
    title: "有吉豐盛丼專売店",
    type: "Food",
    travelDate: 19,
  },
  {
    position: { lat: 25.04333746271507, lng: 121.50618178213796 },
    title: "FOUR TAIPEI",
    type: "Food",
    travelDate: "",
  },
  {
    position: { lat: 25.020247696427845, lng: 121.55737236684621 },
    title: "雞窩餐廳",
    type: "Food",
    travelDate: 20,
  },
  {
    position: { lat: 25.03196425286934, lng: 121.47587331520367 },
    title: "一番町日式居酒屋",
    type: "Food",
    travelDate: 20,
  },
  {
    position: { lat: 25.045490658412348, lng: 121.50790192631582 },
    title: "檸檬屋正宗苦瓜原汁",
    type: "Food",
    travelDate: "",
  },
  {
    position: { lat: 25.036327313749585, lng: 121.55439021097337 },
    title: "Ellie 耶里西點（仁愛本店）",
    type: "Food",
    travelDate: 19,
  },
  {
    position: { lat: 25.038619730518583, lng: 121.54973518028889 },
    title: "PAUL 保羅麵包法式烘焙餐廳（仁愛店）",
    type: "Food",
    travelDate: 19,
  },
];

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 25.045488958061224, lng: 121.51568649748022 },
    zoom: 15,
  });

  for (let i = 0; i < markers.length; i++) {
    marker = new google.maps.Marker({
      position: markers[i].position,
      map: map,
      title: markers[i],
      icon: iconByType[markers[i].type],
    });
  }
}

initMap();
