import "./App.css";
import "bulma/css/bulma.css";
import Card from "./Card";

function App() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Primary hero</p>
          <p class="subtitle">Primary subtitle</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Card
              title="Hüseyin"
              subtitle="@huseyin"
              text="deneme yazı"
              time="01.01.2023"
              ></Card>
            </div>
            <div className="column">
              <Card
              title="Kerem"
              subtitle="@huseyin"
              text="deneme yazı"
              time="01.01.2023"
              ></Card>
            </div>
            <div className="column">
              <Card
              title="Yiğit"
              subtitle="@huseyin"
              text="deneme yazı"
              time="01.01.2023"
              ></Card>
            </div>
            <div className="column">
              <Card
              title="Betül"
              subtitle="@huseyin"
              text="deneme yazı"
              time="01.01.2023"
              ></Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
