import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Prueba en <GifGridItem/>", () => {
  const title = "Un titulo";
  const url = "http://www.url.com";

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("de de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("Debe de de tener la imagen igual al url y alt de props", () => {
    const img = wrapper.find("img");
    // console.log(img.props());
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe de tener animate__fadeIn ", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
