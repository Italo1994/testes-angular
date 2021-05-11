import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  name: string = "Italo";
  surname: string = "Hortiz";
  ocupation: string = "Web Developer";
  age: number = 26;
}
