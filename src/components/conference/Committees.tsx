
import React from 'react';

const Committees = () => {
  return (
    <section id="committees" className="py-16 bg-white">
      <div className="conference-container">
        <h2 className="section-title text-center">Conference Committees</h2>
        <div className="section-divider"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-conference-darkgray mb-6 text-center">Organizing Committee</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CommitteeCard
                name="Prof. John Smith"
                role="Conference Chair"
                affiliation="University of Technology"
              />
              <CommitteeCard
                name="Prof. Sarah Johnson"
                role="Program Chair"
                affiliation="National Institute of Science"
              />
              <CommitteeCard
                name="Dr. Michael Brown"
                role="Publication Chair"
                affiliation="International University"
              />
              <CommitteeCard
                name="Dr. Emily Davis"
                role="Finance Chair"
                affiliation="State University"
              />
              <CommitteeCard
                name="Prof. Robert Wilson"
                role="Technical Chair"
                affiliation="Technical University"
              />
              <CommitteeCard
                name="Dr. Laura Taylor"
                role="Publicity Chair"
                affiliation="Global Research Institute"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-conference-darkgray mb-6 text-center">Technical Program Committee</h3>
            
            <div className="bg-conference-lightgray p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <MemberItem name="Prof. Andrew Thompson" affiliation="University of Technology" />
                <MemberItem name="Dr. Jessica Wang" affiliation="National Research Center" />
                <MemberItem name="Prof. David Miller" affiliation="Technical University" />
                <MemberItem name="Dr. Lisa Chen" affiliation="Institute of Advanced Studies" />
                <MemberItem name="Prof. James Wilson" affiliation="International University" />
                <MemberItem name="Dr. Patricia Lee" affiliation="State University" />
                <MemberItem name="Prof. Richard Anderson" affiliation="University of Science" />
                <MemberItem name="Dr. Julia Martinez" affiliation="Research Institute" />
                <MemberItem name="Prof. Thomas Scott" affiliation="Technical College" />
                <MemberItem name="Dr. Karen White" affiliation="Global University" />
                <MemberItem name="Prof. Daniel Garcia" affiliation="Engineering University" />
                <MemberItem name="Dr. Rebecca Lewis" affiliation="Institute of Technology" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CommitteeCard = ({ name, role, affiliation }: { name: string, role: string, affiliation: string }) => (
  <div className="bg-conference-lightgray p-6 rounded-lg">
    <h4 className="text-lg font-bold text-conference-darkgray">{name}</h4>
    <p className="text-conference-darkgray font-medium">{role}</p>
    <p className="text-gray-600 text-sm">{affiliation}</p>
  </div>
);

const MemberItem = ({ name, affiliation }: { name: string, affiliation: string }) => (
  <div className="flex items-center">
    <div className="h-2 w-2 rounded-full bg-conference-yellow mr-3"></div>
    <div>
      <span className="text-conference-darkgray font-medium">{name}</span>
      <span className="text-gray-600 text-sm ml-1">({affiliation})</span>
    </div>
  </div>
);

export default Committees;
