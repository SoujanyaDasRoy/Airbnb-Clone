export interface LocationItem {
    location: string;
    description: string;
  }
  
export type TabName = 
| 'Popular' 
| 'Arts & culture' 
| 'Outdoors' 
| 'Mountains' 
| 'Beach' 
| 'Unique stays' 
| 'Categories' 
| 'Things to do';

export type TabContentMap = Record<TabName, LocationItem[]>;

export interface FooterLinkSection {
    title: string;
    links: string[];
}