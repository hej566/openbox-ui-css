import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import MenuGroup from '../components/MenuGroup';
import SubMenu from '../components/SubMenu';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';
import Button from '../components/Button';

function Menus() {
  const defaultActiveId = '';
  let defaultOpenKey = ['5-3'];
  const [isCollapsed, setCollapsedState] = useState(true);

  function clickHandler() {
    setCollapsedState(!isCollapsed);
    defaultOpenKey = ['5'];
  }

  return (
    <div>
      {/* <div> */}
      {/*  <Menu defaultActiveId={defaultActiveId} defaultOpenKey={defaultOpenKey}> */}
      {/*    <MenuItem key="1" menuId="1" prefix={<Icon Component={Acorn} />}> */}
      {/*      Option 1 */}
      {/*    </MenuItem> */}
      {/*    <MenuItem key="2" menuId="2" prefix={<Icon Component={Acorn} />}> */}
      {/*      Option 2 */}
      {/*    </MenuItem> */}
      {/*    <MenuItem key="3" menuId="3" prefix={<Icon Component={Acorn} />}> */}
      {/*      Option 3 */}
      {/*    </MenuItem> */}
      {/*    <SubMenu key="4" menuId="4" label="Navigation One" prefix={<Icon Component={Acorn} />}> */}
      {/*      <MenuItem key="4-1" menuId="4-1"> */}
      {/*        Option 5 */}
      {/*      </MenuItem> */}
      {/*      <MenuItem key="4-2" menuId="4-2"> */}
      {/*        Option 6 */}
      {/*      </MenuItem> */}
      {/*      <MenuItem key="4-3" menuId="4-3"> */}
      {/*        Option 7 */}
      {/*      </MenuItem> */}
      {/*      <MenuItem key="4-4" menuId="4-4"> */}
      {/*        Option 8 */}
      {/*      </MenuItem> */}
      {/*    </SubMenu> */}
      {/*    <SubMenu key="5" menuId="5" label="Navigation Two" prefix={<Icon Component={Acorn} />}> */}
      {/*      <MenuItem key="5-1" menuId="5-1"> */}
      {/*        Option 9 */}
      {/*      </MenuItem> */}
      {/*      <MenuItem key="5-2" menuId="5-2"> */}
      {/*        Option 10 */}
      {/*      </MenuItem> */}
      {/*      <SubMenu key="5-3" menuId="5-3" label="Submenu"> */}
      {/*        <MenuItem key="5-3-1" menuId="5-3-1"> */}
      {/*          Option 11 */}
      {/*        </MenuItem> */}
      {/*      </SubMenu> */}
      {/*    </SubMenu> */}
      {/*  </Menu> */}
      {/* </div> */}
      {/* <div> */}
      {/*  <Menu> */}
      {/*    <MenuItem key="1" menuId="1" prefix={<Icon Component={Acorn} />}> */}
      {/*      Option 1 */}
      {/*    </MenuItem> */}
      {/*    <MenuItem key="2" menuId="2" prefix={<Icon Component={Acorn} />}> */}
      {/*      Option 2 */}
      {/*    </MenuItem> */}
      {/*    <MenuItem key="3" menuId="3" prefix={<Icon Component={Acorn} />}> */}
      {/*      Option 3 */}
      {/*    </MenuItem> */}
      {/*    <SubMenu key="4" menuId="4" label="Navigation One" prefix={<Icon Component={Acorn} />}> */}
      {/*      <MenuGroup key="4-1" menuId="4-1" label="group1"> */}
      {/*        <MenuItem key="4-1-1" menuId="4-1-1"> */}
      {/*          Option 5 */}
      {/*        </MenuItem> */}
      {/*        <MenuItem key="4-1-2" menuId="4-1-2"> */}
      {/*          Option 6 */}
      {/*        </MenuItem> */}
      {/*      </MenuGroup> */}
      {/*      <MenuGroup key="4-2" menuId="4-2" label="group2"> */}
      {/*        <MenuItem key="4-2-1" menuId="4-2-1"> */}
      {/*          Option 7 */}
      {/*        </MenuItem> */}
      {/*        <MenuItem key="4-2-2" menuId="4-2-2"> */}
      {/*          Option 8 */}
      {/*        </MenuItem> */}
      {/*      </MenuGroup> */}
      {/*    </SubMenu> */}
      {/*    <SubMenu key="5" menuId="5" label="Navigation Two" prefix={<Icon Component={Acorn} />}> */}
      {/*      <MenuItem key="5-1" menuId="5-1"> */}
      {/*        Option 9 */}
      {/*      </MenuItem> */}
      {/*      <MenuItem key="5-2" menuId="5-2"> */}
      {/*        Option 10 */}
      {/*      </MenuItem> */}
      {/*      <SubMenu key="5-3" menuId="5-3" label="Submenu"> */}
      {/*        <MenuItem key="5-3-1" menuId="5-3-1"> */}
      {/*          Option 11 */}
      {/*        </MenuItem> */}
      {/*        <MenuItem key="5-3-2" menuId="5-3-2"> */}
      {/*          Option 12 */}
      {/*        </MenuItem> */}
      {/*      </SubMenu> */}
      {/*    </SubMenu> */}
      {/*  </Menu> */}
      {/* </div> */}
      <div>
        <Button onClick={clickHandler}>toggle</Button>
        <Menu
          collapsed={isCollapsed}
          defaultActiveId={defaultActiveId}
          defaultOpenKey={defaultOpenKey}
        >
          <MenuItem key="1" menuId="1" prefix={<Icon component={Acorn} />}>
            Option 1
          </MenuItem>
          <MenuItem key="2" menuId="2" prefix={<Icon component={Acorn} />}>
            Option 2
          </MenuItem>
          <MenuItem key="3" menuId="3" prefix={<Icon component={Acorn} />}>
            Option 3
          </MenuItem>
          <SubMenu key="4" menuId="4" label="Navigation One" prefix={<Icon component={Acorn} />}>
            <MenuGroup label="group1">
              <MenuItem key="4-1" menuId="4-1">
                Option 5
              </MenuItem>
              <MenuItem key="4-2" menuId="4-2">
                Option 6
              </MenuItem>
            </MenuGroup>
            <MenuGroup label="group2">
              <MenuItem key="4-3" menuId="4-3">
                Option 7
              </MenuItem>
              <MenuItem key="4-4" menuId="4-4">
                Option 8
              </MenuItem>
            </MenuGroup>
          </SubMenu>
          <SubMenu key="5" menuId="5" label="Navigation Two" prefix={<Icon component={Acorn} />}>
            <MenuItem key="5-1" menuId="5-1">
              Option 9
            </MenuItem>
            <MenuItem key="5-2" menuId="5-2">
              Option 10
            </MenuItem>
            <SubMenu key="5-3" menuId="5-3" label="Submenu">
              <MenuItem key="5-3-1" menuId="5-3-1">
                Option 11
              </MenuItem>
              <MenuItem key="5-3-2" menuId="5-3-2">
                Option 12
              </MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default Menus;
