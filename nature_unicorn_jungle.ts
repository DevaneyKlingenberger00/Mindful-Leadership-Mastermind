// TypeScript File

import { BusinessLeader } from './BusinessLeader';

export class MastermindGroup {

    public id: number;
    public topic: string;
    public members: BusinessLeader[];
    
    constructor(id: number, topic: string, members: BusinessLeader[]) {
        this.id = id;
        this.topic = topic;
        this.members = members;
    }
    
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTopic(): string {
        return this.topic;
    }

    public setTopic(topic: string): void {
        this.topic = topic;
    }

    public getMembers(): BusinessLeader[] {
        return this.members;
    }

    public setMembers(members: BusinessLeader[]): void {
        this.members = members;
    }

    public addMember(leader: BusinessLeader): void { 
        this.members.push(leader);
    }

    public removeMember(index: number): void { 
        this.members.splice(index, 1);
    }

    public findMember(name: string): BusinessLeader { 
        let _member : BusinessLeader = null;

        this.members.forEach(member => {
            if (name == member.name) {
                _member = member;
            }
        });
        
        return _member;
    }

}