function gcd(a, b) {
  const arr = [];
  if (a == 0 || b == 0) {
    console.log(Math.max(a, b));
    return;
  }
  return gcd(b % a, a);
}

// Example:
gcd(14159572, 63967072);
