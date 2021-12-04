function verificaPalindrome(str) {
  let inverteStr = str.split("").reverse().join("");
  if (str == inverteStr) {
    return true;
  } else {
    return false;
  }
}

verificaPalindrome("arara");
