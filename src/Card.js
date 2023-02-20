import React from "react";

export default function Card(props) {
  const { title, subtitle, text, time } = props;
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="resim"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="resim"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{subtitle}</p>
            </div>
          </div>

          <div className="content">
            {text}
            <br />
            <time datetime="2016-1-1">{time}</time>
          </div>
        </div>
      </div>
    </div>
  );
}
