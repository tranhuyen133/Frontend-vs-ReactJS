function greetingWithWeather(name, weather) {
  if (weather === "sunny") {
    return `Chào ${name}! Hôm nay trời nắng tuyệt vời!`;
  } else if (weather === "rainy") {
    return `Chào ${name}! Hôm nay trời mưa, hãy mang theo ô!`;
  } else {
    return `Chào ${name}! Hôm nay thời tiết không xác định.`;
  }
}

console.log(greetingWithWeather("Huyền", "sunny")); 
console.log(greetingWithWeather("Huyền", "rainy"));
console.log(greetingWithWeather("Huyền", "cloudy")); 
