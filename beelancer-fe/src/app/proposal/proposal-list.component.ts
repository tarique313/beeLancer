import { Component } from '@angular/core';
import { Proposal } from './proposal';
@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent{
	proposalOne: Proposal = new Proposal(15, 'ABC Company', 
		'http://asdadsa.com', 'ROR', 150, 120, 15, 'test@email.com')
	proposalTwo: Proposal = new Proposal(20, 'DEF Company', 
		'http://asdadff.com', 'Laravel', 200, 150, 30, 'test2@email.com')
	proposalThree: Proposal = new Proposal(25, 'GHI Company', 
		'http://wewewee.com', 'Spring', 250, 200, 40, 'test3@email.com')

	proposals: Proposal[] = [
		this.proposalOne, 
		this.proposalTwo, 
		this.proposalThree
	]
}