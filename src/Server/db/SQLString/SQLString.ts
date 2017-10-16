/**
 *
 * SQLString.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/19
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
/**
 * 查出所有项目并带上负责人姓名
 * @type {string}
 */
const FindAllProject= `SELECT
 \`projects\`.\`id\` ,
 \`projects\`.\`pname\` ,
 \`projects\`.\`start_time\`,
 \`projects\`.\`responserID\`,
 \`projects\`.\`status\`,
 \`users\`.\`username\`,
 \`users\`.\`workNo\` 
 FROM \`projects\`  
 left join \`users\`  
  ON   (\`projects\`.\`responserID\`=\`users\`.\`id\`) `;
const FindGroupByProjectID=
`SELECT GROUP_CONCAT(temp.str) AS Groups
FROM (SELECT concat(id, ", ", groupName) AS str 
    FROM \`groups\`
    WHERE \`id\` 
    IN( SELECT gid   FROM \`T_REF_GROUP_PROJECT\` 
    WHERE \`pid\`= ?)
) temp`;
export {
    FindAllProject,
    FindGroupByProjectID
}