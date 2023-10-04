export interface MemberInfo {
  member: Member;
  spaceWall: SpaceWall;
}

export interface Member {
  memberId: number;
  memberName: string;
  memberProfileImageUrl: null;
  memberShip: string;
}

export interface SpaceWall {
  personal: Organization[];
  organization: Organization[];
}

export interface Organization {
  addSpaceId: number;
  spaceType: string;
  spaceTitle: string;
}
