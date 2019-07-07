/*
 Navicat Premium Data Transfer

 Source Server         : qdc
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : db4node

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 05/07/2019 21:46:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for food_table
-- ----------------------------
DROP TABLE IF EXISTS `food_table`;
CREATE TABLE `food_table`  (
  `delflag` int(1) NOT NULL DEFAULT 0,
  `id` int(8) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `foodname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `discription` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userID` int(5) UNSIGNED ZEROFILL NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of food_table
-- ----------------------------
INSERT INTO `food_table` VALUES (0, 00000006, '淳化饸饹', '陕西省咸阳市秦都区秦皇南路', NULL, 00001);
INSERT INTO `food_table` VALUES (0, 00000007, '百味聚家常菜', '陕西省咸阳市秦都区胜利路咸阳汽车站斜对面西北方向42米', NULL, 00001);
INSERT INTO `food_table` VALUES (0, 00000008, '唐氏兄弟馄饨王', '陕西省咸阳市秦都区胜利路咸阳汽车站斜对面正西方向98米', NULL, 00001);
INSERT INTO `food_table` VALUES (0, 00000009, '烧烤点', '陕西省咸阳市秦都区渭阳中路附6号', NULL, 00001);
INSERT INTO `food_table` VALUES (1, 00000010, '益禾堂', '陕西省咸阳市秦都区陈杨寨街道办事处中医学院社区陕西中医药大学南校区华佗路10号', NULL, 00001);
INSERT INTO `food_table` VALUES (1, 00000011, '老段家关中印象主题餐厅', '陕西省咸阳市渭城区乐育北路505大楼南', NULL, 00001);
INSERT INTO `food_table` VALUES (1, 00000012, '蒙记小军烧烤(清泰街店)', '陕西省咸阳市渭城区清泰街2号', NULL, 00001);
INSERT INTO `food_table` VALUES (0, 00000013, '金丝蜜枣糕', '陕西省咸阳市秦都区胜利街胜利路', NULL, 00001);
INSERT INTO `food_table` VALUES (0, 00000014, '宝宇大连海鲜渔港', '陕西省咸阳市秦都区秦皇中路金奎大厦1楼(近咸阳财苑大厦)', NULL, 00001);
INSERT INTO `food_table` VALUES (0, 00000015, '成都香豆腐(渭滨花海运动区店)', '陕西省咸阳市秦都区体育场十字', NULL, 00001);
INSERT INTO `food_table` VALUES (1, 00000016, '红星软香酥总经销', '陕西省咸阳市秦都区市政府对面', NULL, 00001);
INSERT INTO `food_table` VALUES (0, 00000017, '秦源饺子馆(胜利街店)', '陕西省咸阳市秦都区胜利街20号凌云数码正对面', NULL, 00001);
INSERT INTO `food_table` VALUES (0, 00000018, '馨益仙茶', '陕西省咸阳市秦都区胜利路咸阳汽车站斜对面正东方向109米', NULL, 00001);

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table`  (
  `id` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`, `username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_table
-- ----------------------------
INSERT INTO `user_table` VALUES (00001, 'qdc', '1234');
INSERT INTO `user_table` VALUES (00002, 'qwer', '1234');
INSERT INTO `user_table` VALUES (00005, 'qwert', 'qazwsx');
INSERT INTO `user_table` VALUES (00006, 'qdc123', 'qazwsx');
INSERT INTO `user_table` VALUES (00007, 'cjy', '1234');

SET FOREIGN_KEY_CHECKS = 1;
