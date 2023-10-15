import Company from "./Company";
import Project from "./Project";
import Bag from "./Bag";

const CareerPanel = () => (
  <>
    <h2 className="text-2xl mb-3 font-bold">
      <Bag className="inline align-text-bottom mb-0.5 mr-2" />
      Experience Details
    </h2>
    <ul className="list-disc pl-6">
    <li>
        <Company
          name="Citrix System."
          rank="Lead Escalation Support Engineer"
          beginTime="2023"
          endTime="now"
          desc={
            <div>
              <p>Mainly support GC cases escalate from Frontline engineer and provide log analysis support for FL. KPI top3;</p>
              <p>
              Act as an effective technical interface between customers and Eng/PM teams, clearly documenting customers’ pain points and feature enhancements customers need to be aware of;
              </p>
            </div>
          }
        />
        <ul className="list-circle pl-4">
          <li>
            <Project
              name="Car company project support"
              desc="2000 point performance tuning support for car company. It needs to not only meet the high definition and smooth experience of graphic design for users of CATIA drawing software, but also ensure the basic needs of Office users."
              items={[
              "The Graphic performance issues block the delivery of the project. Customers's architecture is Double Hop and could not be changed.I solved a series of related problems such as screen glitter and hang issue for the client, and was recognized by the client；",
              "Deeply analyze customer pain points together with sales, actively coordinate with R&D product team to join in and accelerate problem solving；",
              "Continue to follow up various problems from users after project delivery and provide better user experience for customers；",
              ]}
            />
          </li>
        </ul>
      </li>
      <li>
        <Company
          name="Citrix System."
          rank="Escalation Support Engineer"
          beginTime="2021"
          endTime="2023"
          desc={
            <div>
              <p>Take initiatives to address high-priority and severe customer cases;</p>
              <p>
              Assist sales to solve design and technical issues to ensure a good-quality delivery within the deadline;
              </p>
              <p>
              Coach newcomers to familiarize themselves with the company's products more quickly.
              </p>
            </div>
          }
        />
        <ul className="list-circle pl-4">
          <li>
            <Project
              name="Hangzhou TOP Internet company project support"
              desc="2021 Q1 Hangzhou TOP Internet Company 3000 points desktop expansion project.First of all, to expand the quota of Linux desktop. Secondly, they need the customer's daily office computer can access the cloud desktop. Also to ensure that the desktop runs on the customized thin terminal stable.
              "
              items={[
              "As the project interface leader to complete the product project docking, overcome various difficulties to assist with technical issues. The Linux terminal project was completed two weeks ahead of schedule；",
              "Established a Linux product support virtual team, led the team of 4 engineers to deal with a total of 40+cases, reviewed each engineer's case Daily, and provided investigation ideas；",
              "Assist thin terminal manufacturers to complete custom development requirements and provide API interfaces；",
              ]}
            />
          </li>
        </ul>
      </li>
      <li>
        <Company
          name="Citrix System."
          rank="Senior technical support engineer"
          beginTime="2018"
          endTime="2020"
          desc={
            <div>
              <p>
              Focus on in-depth problem analysis of Citrix products and their integration into enterprise-wide mixed environments;
              </p>
              <p>
              Carry out tasks of summarizing and sorting out documents and materials of the new Linux VDA product for global support engineers’ reference;
              </p>
              <p>
              Deliver knowledge sharing and join cross team projects;
              </p>
              <p>
              Act as an effective technical interface between customers and Eng/PM teams, clearly documenting customers’ pain points and feature enhancements customers need to be aware of.
              </p>
            </div>
          }
        />

<ul className="list-circle pl-4">
          <li>
            <Project
              name="Taiwan a large mobile phone chip company upgrade project support"
              desc="Q4 2020 Taiwan a large mobile phone chip company product upgrade 1500 points desktop project. Customers need to upgrade OS from RedHat 6.9 to RedHat 7.6 .Need to ensure that existing software is compatible and stable.
              "
              items={[
              "Propose the overall upgrade and optimization scheme based on the existing structure, and implement the upgrade together with on site engineers；",
              "After upgrade environment successfully,I am the sole interface of Support Team to solve the technical problems in the testing phase of customer；",
              "We provided special support to the American users of the company, responded in a timely manner within 24 hours to win the trust of the customers. The customers finally placed the order within the specified time；",
              ]}
            />
          </li>
          <li>
            <Project
              name="Project support for a domestic e-commerce company"
              desc="During the Spring Festival in 2020, I worked with pre-sales engineers to urgently launch 4000 desktop points for an e-commerce company within a week.
              To meet the needs of online customer service staff working from home. And cooperate with on site third-party engineers to deal with various technical problems encountered in the deployment process, especially voice call quality, security control and other key issues.
              After successful implementation, it is highly recognized by customers."
              items={[]}
            />
          </li>
        </ul>
      </li>

      <li>
        <Company
          name="Citrix System. "
          rank="Technical support engineer"
          beginTime="2015"
          endTime="2018"
          desc={
            <div>
              <p>
              Provides technical assistance on Citrix Xenserver and XenDesktop/App products (PVS,Linux VDA,Linux Receiver)to customers of medium to large size, scope, and/or political complexity - via phone, email and/or remote access;
              </p>
              <p>
              Performs problem analysis and isolates problems of moderate to high complexity;
              </p>
              <p>Achieves and maintains targeted call statistics such as number of calls answered, number of cases closed or issues resolved, along with other established goals. KPI indicators TTC/NPS/Case Volumes were all ahead of team members;</p>
              <p>Document cases, recommendations, and resolutions clearly in the CRM system, take ownership of hot and/or more political cases;</p>
              <p>
              Every Month take 2 weeks 7*24 on duty phone rotation or occasional on-site tasks;
              </p>
              <p>Publish articles on moderately complex technical support issues in online KB and reviews others’ articles;</p>
            </div>
          }
        />
      </li>
    </ul>
  </>
);

export default CareerPanel;
