"use client";

import { useState, useCallback, useMemo, memo } from 'react';
import { LocationItem, TabName, TabContentMap, FooterLinkSection } from '../../types';

// Memoized location item component for better performance
const LocationItemComponent = memo(({ item }: { item: LocationItem }) => (
  <div className="hover:bg-gray-50 p-2 rounded-md cursor-pointer transition-colors duration-200">
    <h3 className="text-base font-semibold mb-1">{item.location}</h3>
    <p className="text-xs text-gray-600">{item.description}</p>
  </div>
));

// Memoized tab button component
const TabButton = memo(({ 
  name, 
  isActive, 
  onClick 
}: { 
  name: TabName; 
  isActive: boolean; 
  onClick: (tab: TabName) => void; 
}) => (
  <button 
    className={`px-4 py-2 font-medium focus:outline-none transition-all duration-200 ${
      isActive ? 'border-b-2 border-black font-semibold' : 'hover:text-black hover:border-b-2 hover:border-gray-300'
    }`}
    onClick={() => onClick(name)}
    aria-selected={isActive}
    role="tab"
  >
    {name}
  </button>
));

// Memoized footer link section component
const FooterSection = memo(({ section }: { section: FooterLinkSection }) => (
  <div>
    <h3 className="text-base font-semibold mb-4">{section.title}</h3>
    <ul className="space-y-3">
      {section.links.map((link, index) => (
        <li key={index} className="text-sm hover:underline cursor-pointer transition-colors duration-200">
          {link}
        </li>
      ))}
    </ul>
  </div>
));

const Footer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>('Popular');
  const [showMore, setShowMore] = useState<boolean>(false);
  
  // Content for different tabs
  const tabContent: TabContentMap = {
    'Popular': [
      { location: 'Canmore', description: 'Pet-friendly rentals' },
      { location: 'Benalmádena', description: 'Beach house rentals' },
      { location: 'Marbella', description: 'Beachfront rentals' },
      { location: 'Mijas', description: 'House rentals' },
      { location: 'Prescott', description: 'House rentals' },
      { location: 'Scottsdale', description: 'House rentals' },
      { location: 'Tucson', description: 'Flat rentals' },
      { location: 'Jasper', description: 'Cabin rentals' },
      { location: 'Mountain View', description: 'Family-friendly rentals' },
      { location: 'Devonport', description: 'Cottage rentals' },
      { location: 'Mallacoota', description: 'Beach house rentals' },
      { location: 'Ibiza', description: 'Holiday rentals' },
      { location: 'Anaheim', description: 'Beach house rentals' },
      { location: 'Monterey', description: 'Bungalow rentals' },
      { location: 'Paso Robles', description: 'Cottage rentals' },
      { location: 'Santa Barbara', description: 'Cottage rentals' },
      { location: 'Sonoma', description: 'Cabin rentals' },
    ],
    'Arts & culture': [
      { location: 'Paris', description: 'Gallery apartments' },
      { location: 'Barcelona', description: 'Design stays' },
      { location: 'New York', description: 'Museum district stays' },
      { location: 'Florence', description: 'Historical apartments' },
      { location: 'Berlin', description: 'Art district lofts' },
      { location: 'Tokyo', description: 'Modern cultural stays' },
    ],
    'Outdoors': [
      { location: 'Banff', description: 'Mountain cabins' },
      { location: 'Yellowstone', description: 'Park view stays' },
      { location: 'Yosemite', description: 'Cabin rentals' },
      { location: 'Lake Tahoe', description: 'Lakefront cabins' },
      { location: 'Joshua Tree', description: 'Desert stays' },
      { location: 'Moab', description: 'Adventure rentals' },
    ],
    'Mountains': [
      { location: 'Aspen', description: 'Ski-in rentals' },
      { location: 'Whistler', description: 'Mountain chalets' },
      { location: 'Rocky Mountains', description: 'View cabins' },
      { location: 'Alps', description: 'Alpine cabins' },
      { location: 'Dolomites', description: 'Mountain retreats' },
      { location: 'Poconos', description: 'Wooded cabins' },
    ],
    'Beach': [
      { location: 'Cancun', description: 'Beachfront villas' },
      { location: 'Miami', description: 'Ocean view condos' },
      { location: 'Malibu', description: 'Beach houses' },
      { location: 'Bali', description: 'Beach bungalows' },
      { location: 'Santorini', description: 'Coastal villas' },
      { location: 'Gold Coast', description: 'Surf apartments' },
    ],
    'Unique stays': [
      { location: 'Treehouses', description: 'Worldwide' },
      { location: 'Houseboats', description: 'Lake stays' },
      { location: 'Yurts', description: 'Wilderness stays' },
      { location: 'Castles', description: 'Historic retreats' },
      { location: 'Caves', description: 'Unusual accommodations' },
      { location: 'Domes', description: 'Modern designs' },
    ],
    'Categories': [
      { location: 'Amazing views', description: 'Featured homes' },
      { location: 'Tiny homes', description: 'Minimalist stays' },
      { location: 'Chef\'s kitchens', description: 'Cooking retreats' },
      { location: 'Luxe', description: 'High-end homes' },
      { location: 'Vineyards', description: 'Wine country stays' },
      { location: 'Design', description: 'Architectural wonders' },
    ],
    'Things to do': [
      { location: 'Cooking classes', description: 'Local cuisine' },
      { location: 'Hiking tours', description: 'Guided adventures' },
      { location: 'Surfing lessons', description: 'Beach activities' },
      { location: 'Wine tasting', description: 'Vineyard tours' },
      { location: 'Wildlife safaris', description: 'Nature experiences' },
      { location: 'City tours', description: 'Local exploration' },
    ],
  };

  // Tabs available
  const tabs = useMemo<TabName[]>(() => [
    'Popular', 
    'Arts & culture', 
    'Outdoors', 
    'Mountains', 
    'Beach', 
    'Unique stays', 
    'Categories', 
    'Things to do'
  ], []);

  // Footer link sections
  const footerSections: FooterLinkSection[] = useMemo(() => [
    {
      title: 'Support',
      links: [
        'Help Centre',
        'AirCover',
        'Anti-discrimination',
        'Disability support',
        'Cancellation options',
        'Report neighbourhood concern'
      ]
    },
    {
      title: 'Hosting',
      links: [
        'Airbnb your home',
        'AirCover for Hosts',
        'Hosting resources',
        'Community forum',
        'Hosting responsibly',
        'Airbnb.org: disaster relief stays'
      ]
    },
    {
      title: 'Airbnb',
      links: [
        'Newsroom',
        'New features',
        'Careers',
        'Investors',
        'Airbnb Luxe'
      ]
    }
  ], []);
  
  // Memoize the items to display based on current state
  const displayItems = useMemo(() => 
    showMore ? tabContent[activeTab] : tabContent[activeTab].slice(0, 17),
  [showMore, activeTab, tabContent]);

  // Memoize whether to show the "Show more" button
  const shouldShowMoreButton = useMemo(() => 
    tabContent[activeTab].length > 17,
  [activeTab, tabContent]);

  // Callback for tab change to avoid recreation on each render
  const handleTabChange = useCallback((tab: TabName) => {
    setActiveTab(tab);
    setShowMore(false); // Reset show more state when changing tabs
  }, []);

  // Toggle show more/less
  const toggleShowMore = useCallback(() => {
    setShowMore(prev => !prev);
  }, []);

  return (
    <footer className="font-sans bg-gray-100 text-sm text-gray-700 px-16 sm:px-5 max-w-8xl">
      <div className="border-b border-gray-300 pb-5 mb-5">
        <h2 className="text-xl font-semibold mb-4 sm:mb-5">Inspiration for future getaways</h2>
        
        {/* Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide pb-2 mb-4 sm:mb-5 border-b border-gray-200" role="tablist">
          {tabs.map(tab => (
            <TabButton 
              key={tab}
              name={tab}
              isActive={activeTab === tab}
              onClick={handleTabChange}
            />
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5" id="location-items">
          {displayItems.map((item, index) => (
            <LocationItemComponent key={`${item.location}-${index}`} item={item} />
          ))}
          
          {shouldShowMoreButton && (
            <div className="flex items-center">
              <button 
                onClick={toggleShowMore} 
                className="text-sm font-semibold flex items-center hover:underline focus:outline-none transition-colors duration-200"
                aria-expanded={showMore}
                aria-controls="location-items"
              >
                {showMore ? 'Show less' : 'Show more'} 
                <span className="ml-1 transform transition-transform duration-200" aria-hidden="true">
                  {showMore ? '▲' : '▼'}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer links section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-5">
        {footerSections.map((section, index) => (
          <FooterSection key={index} section={section} />
        ))}
      </div>

      {/* Copyright and additional info */}
      <div className="mt-8 pt-4 border-t border-gray-300 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Airbnb, Inc. All rights reserved.</p>
        <div className="mt-2 flex flex-wrap gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;