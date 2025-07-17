let expr = "Oranges";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $70 per kg");
    break;
  case "Mangoes":
  case "papays":
    console.log("Mangoes and papayas are $50 per kg");
    break;
  default:
    console.log("sorry we can't find cost for your fruit");
}
