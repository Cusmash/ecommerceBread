export const SidebarFilters = () => {
    return (
      <aside className="w-64 hidden lg:block">
        <h3 className="text-lg font-semibold mb-4">Filter</h3>
  
        <div className="mb-6">
          <h4 className="font-bold mb-2">Collections</h4>
          <ul className="space-y-1 text-sm">
            <li><input type="checkbox" /> Artisan Breads</li>
            <li><input type="checkbox" /> Breakfast Treats</li>
            <li><input type="checkbox" /> Special Occasions</li>
            <li><input type="checkbox" /> Vegan Delights</li>
          </ul>
        </div>
  
        <div>
          <h4 className="font-bold mb-2">Price</h4>
          <input type="range" min={0} max={50} />
          <div className="text-sm text-gray-600">0 - $50</div>
        </div>
      </aside>
    );
  };
  