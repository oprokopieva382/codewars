function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else {
    return "F";
  }
}
//or faster
function getGrade(s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3;
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F";
}
//Remove First and Last Character
function removeChar(str) {
  return str.split("").slice(1, -1).join("");
}
//or
function removeChar(str) {
  return str.slice(1, -1);
}
