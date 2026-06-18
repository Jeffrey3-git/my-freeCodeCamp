function getWiderAspectRatio(a,b){
  const width = w => parseInt(w);
  const height = h => Number(h.slice(h.indexOf("x")+1));
  const gcd = (m,n) => n === 0 ? m : gcd(n, m%n);
  const divider = d => gcd(width(d),height(d));
  const string = s => `${width(s)/divider(s)}:${height(s)/divider(s)}`;
  return width(a)/height(a) > width(b)/height(b) ?  string(a) : string(b);
}
console.log(getWiderAspectRatio("1920x1080", "800x600"));
console.log(getWiderAspectRatio("1080x1350", "2048x1536"));
console.log(getWiderAspectRatio("640x480", "2440x1220"));
console.log(getWiderAspectRatio("360x640", "1080x1920"));
console.log(getWiderAspectRatio("3440x1440", "2048x858"));
console.log(getWiderAspectRatio("12345x61234", "12534x51234"));

