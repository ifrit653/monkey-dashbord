const NavItem = ({ item, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
      isActive
        ? 'bg-blue-600 text-white shadow-lg'
        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
    }`}
  >
    <item.icon size={20} className={`${isActive ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'}`} />
    <div className="text-left">
      <div className="font-medium">{item.label}</div>
      <div className={`text-xs ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
        {item.description}
      </div>
    </div>
  </button>
);

export default NavItem;
