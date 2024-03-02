import { Button } from 'react-bootstrap'
import './buttonSections.css'
import PropTypes from 'prop-types';



ButtonSections.propTypes = {
    legend: PropTypes.string.isRequired,
    action: PropTypes.func,
}
export default function ButtonSections({legend, action}) {
  return (
    <Button className='btn_sections' onClick={action}>{legend}</Button>
    )
}
