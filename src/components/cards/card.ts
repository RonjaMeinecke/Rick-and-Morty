import { createElement } from "../../utils/createElement";
import { Character } from "../../utils/api";

export function createCard({
  imgSrc,
  name,
  status,
  species,
  origin,
}: Character) {
  return createElement("div", {
    className: "card",
    childs: [
      createElement("img", {
        className: "card__portrait",
        src: imgSrc,
        alt: "",
      }),
      createElement("div", {
        className: "card__info",
        childs: [
          createElement("h2", {
            className: "info__name",
            innerText: name,
          }),
          createElement("p", {
            innerText: `${status === "Alive" ? "🎉" : "💀"} - ${status}`,
          }),
          createElement("p", {
            className: "info__species",
            innerText: species,
          }),
          createElement("p", {
            className: "info__origin",
            innerText: origin.name,
          }),
        ],
      }),
    ],
  });
}
