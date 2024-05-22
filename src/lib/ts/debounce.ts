export default function (func: Function, wait: number) {
  let timeout: number;
  return function(...args: any) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
  };
}