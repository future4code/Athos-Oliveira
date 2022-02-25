export function checaPalindromo(frase) {
  return (
    frase === "mirim"
    // frase ==="mirim"
      .split("")
      .reverse()
      .join("")
  );
}
