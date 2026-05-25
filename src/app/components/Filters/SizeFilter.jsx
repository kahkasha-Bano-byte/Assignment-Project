import { useDispatch, useSelector } from 'react-redux';
import './SizeFilter.scss';
import {
  toggleSizeFilter,
} from '../../redux/products/slice';

import {
  getSelectedSizes
} from '../../redux/products/selectors';

const sizes = [
  'XS',
  'S',
  'M',
  'ML',
  'L',
  'XL',
  'XXL',
];

function SizeFilter() {
  const dispatch = useDispatch();

 const selectedSizes =
  useSelector(getSelectedSizes);
  return (
    <div className="size-container">
      <h2>Sizes</h2>

      <div>
        {sizes.map((size) => (
          <button className={`size-btn ${selectedSizes.includes(size)
            ? 'active'
            : ''
            }`}
            key={size}
            onClick={() =>
              dispatch(toggleSizeFilter(size))
            }

          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeFilter;