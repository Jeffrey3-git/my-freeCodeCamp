let Roles = ["user", "creator", "moderator", "staff", "admin"];

function isValidSchema(obj) {
  return typeof obj.username ==="string" && typeof obj.posts === "number" && typeof obj.verified === "boolean" && Roles.includes(obj.role) && typeof (obj?.supporter ?? true) === "boolean" && Array.isArray(obj.badges) && obj.badges.every(element => typeof element === "string");
}

console.log(isValidSchema({ username: "gill", posts: 12, verified: false, role: "creator", supporter: false, badges: [ "early-adopter", "popular" ] }));
console.log(isValidSchema({ username: "tonya", posts: 299, verified: true, role: "moderator", supporter: true, badges: [ "streak-master", "veteran" ], followers: 1233 }));
console.log(isValidSchema({ username: "zara", posts: 0, verified: false, role: "user", supporter: false, badges: [] }));
console.log(isValidSchema({ username: "nicole", posts: 65, verified: true, role: "admin", supporter: false, badges: [ "first-post", 18 ] }));
console.log(isValidSchema({ username: "tim", posts: 25, verified: true, role: "staff", supporter: false }));
console.log(isValidSchema({ username: "charlie", posts: 0, verified: false, role: "user", supporter: "no", badges: [ "first-post", "anniversary" ] }));
console.log(isValidSchema({ username: "wanda", posts: 15, verified: true, role: "friend", supporter: true, badges: [ "popular" ] }));
console.log(isValidSchema({ username: "guy", posts: 5, verified: "false", role: "staff", supporter: true, badges: [ "helper" ] }));
console.log(isValidSchema({ username: "carrie", verified: true, role: "moderator", supporter: true, badges: [ "helper", "sharer" ] }));
console.log(isValidSchema({ username: true, posts: 75, verified: true, role: "creator", supporter: true, badges: [ "veteran" ] }));
