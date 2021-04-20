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
          rank="Lead Technical Support Engineer"
          beginTime="2021"
          endTime="now"
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
