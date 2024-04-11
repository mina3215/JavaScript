// 브라우저에서 실행
console.log(globalThis.Infinity);
console.log(globalThis.NaN);
console.log(globalThis.undefined);

console.log(globalThis.globalThis);

console.log(
  globalThis == globalThis.globalThis,
  globalThis == globalThis.globalThis.globalThis,
  globalThis == globalThis.globalThis.globalThis.globalThis
);

