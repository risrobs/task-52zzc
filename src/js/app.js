import "../scss/app.scss";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  strHtml="<h1>hello</h1>"

  constructor() { }

  ngOnInit(): void {
  }
  insert(){
    let tag = document.getElementById("main");
    let text = document.createElement("H1");
    text.innerHTML = "new string element";
    tag.appendChild(text);
  }

}