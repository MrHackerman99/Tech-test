import React from "react";
import { shallow } from "enzyme";
import VulnerabilityList from "./components/VulnerabilityList";
import vulnerabilities from "./data/vulnerabilitiesData";

describe("VulnerabilityList component", () => {
  it("renders the Vulnerability List header", () => {
    const wrapper = shallow(<VulnerabilityList />);
    const header = <h1>Vulnerability List</h1>;
    expect(wrapper.contains(header)).toEqual(true);
  });

  it("renders the correct number of vulnerabilities", () => {
    const wrapper = shallow(<VulnerabilityList />);
    const numVulnerabilities = vulnerabilities.length;
    expect(wrapper.find("li").length).toEqual(numVulnerabilities);
  });

  it("renders each vulnerability with the correct title and link", () => {
    const wrapper = shallow(<VulnerabilityList />);
    const firstVulnerability = vulnerabilities[0];
    const firstLink = wrapper.find("Link").first();
    expect(firstLink.prop("to")).toEqual(
      `/vulnerabilities/${firstVulnerability.id}`
    );
    expect(firstLink.text()).toEqual(firstVulnerability.title);
  });
});
