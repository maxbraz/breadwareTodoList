import React from 'react'
import FilterLink from '../containers/FilterLink'
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';

const assignment = <AssignmentIcon />;

class BottomNavigationExampleSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    }

    this.select = this.select.bind(this);
  }

  select(index) {
    this.setState({selectedIndex: index});
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="All"
            icon={assignment}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Active"
            icon={assignment}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Completed"
            icon={assignment}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;

// const Footer = () => (
//   <p>
//     Show:
//     {' '}
//     <FilterLink filter="SHOW_ALL">
//       All
//     </FilterLink>
//     {', '}
//     <FilterLink filter="SHOW_ACTIVE">
//       Active
//     </FilterLink>
//     {', '}
//     <FilterLink filter="SHOW_COMPLETED">
//       Completed
//     </FilterLink>
//   </p>
// )

// export default Footer