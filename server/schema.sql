-- ============================================================
-- 上商淘 · 上海商学院二手交易平台 数据库设计
-- Database: MySQL 8.0+
-- Charset: utf8mb4
-- ============================================================

CREATE DATABASE IF NOT EXISTS shangtao
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE shangtao;

-- ------------------------------------------------------------
-- 1. 用户表（普通用户 + 审核员，通过 role 字段区分）
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id`          BIGINT       NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `phone`       VARCHAR(11)  NOT NULL COMMENT '手机号(登录账号)',
  `password`    VARCHAR(100) NOT NULL DEFAULT '' COMMENT '密码(加密存储)',
  `nickname`    VARCHAR(30)  NOT NULL DEFAULT '' COMMENT '昵称',
  `avatar`      VARCHAR(500) DEFAULT '' COMMENT '头像URL',
  `school`      VARCHAR(50)  DEFAULT '上海商学院' COMMENT '学校',
  `college`     VARCHAR(50)  DEFAULT '' COMMENT '学院',
  `student_id`  VARCHAR(20)  DEFAULT '' COMMENT '学号',
  `campus`      VARCHAR(20)  DEFAULT '奉贤校区' COMMENT '所在校区',
  `role`        TINYINT      NOT NULL DEFAULT 0 COMMENT '角色：0=普通用户 1=审核员',
  `credit_score` INT        NOT NULL DEFAULT 100 COMMENT '信用分',
  `status`      TINYINT      NOT NULL DEFAULT 1 COMMENT '状态：1=正常 0=封禁',
  `created_at`  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  `updated_at`  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_phone` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- ------------------------------------------------------------
-- 2. 商品表（status 为唯一审核状态源）
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id`            BIGINT       NOT NULL AUTO_INCREMENT COMMENT '商品ID',
  `seller_id`     BIGINT       NOT NULL COMMENT '卖家(发布者)ID',
  `category`      VARCHAR(20)  NOT NULL DEFAULT '其他' COMMENT '分类：教材/数码/服饰/生活',
  `title`         VARCHAR(50)  NOT NULL COMMENT '商品标题',
  `description`   TEXT         COMMENT '商品描述',
  `price`         DECIMAL(10,2) NOT NULL COMMENT '售价',
  `original_price` DECIMAL(10,2) DEFAULT NULL COMMENT '原价',
  `cover_image`   VARCHAR(500) DEFAULT '' COMMENT '封面图',
  `location`      VARCHAR(50)  DEFAULT '奉贤校区' COMMENT '交易地点',
  `view_count`    INT          NOT NULL DEFAULT 0 COMMENT '浏览量',
  `favorite_count` INT         NOT NULL DEFAULT 0 COMMENT '收藏数',
  `status`        TINYINT      NOT NULL DEFAULT 0 COMMENT '0=待审核 1=已上架 2=已驳回 3=已售出',
  `reject_reason` VARCHAR(200) DEFAULT '' COMMENT '驳回原因',
  `auditor_id`    BIGINT       DEFAULT NULL COMMENT '审核员ID',
  `audit_time`    DATETIME     DEFAULT NULL COMMENT '审核时间',
  `created_at`    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '发布时间',
  `updated_at`    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_seller` (`seller_id`),
  KEY `idx_status` (`status`),
  KEY `idx_category` (`category`),
  KEY `idx_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品表';

-- ------------------------------------------------------------
-- 3. 商品图片表（一个商品多张图）
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `product_image`;
CREATE TABLE `product_image` (
  `id`         BIGINT NOT NULL AUTO_INCREMENT,
  `product_id` BIGINT NOT NULL COMMENT '商品ID',
  `image_url`  VARCHAR(500) NOT NULL COMMENT '图片URL',
  `sort`       INT    NOT NULL DEFAULT 0 COMMENT '排序',
  PRIMARY KEY (`id`),
  KEY `idx_product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品图片表';

-- ------------------------------------------------------------
-- 4. 订单表
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id`           BIGINT        NOT NULL AUTO_INCREMENT COMMENT '订单ID',
  `order_no`     VARCHAR(32)   NOT NULL COMMENT '订单编号',
  `buyer_id`     BIGINT        NOT NULL COMMENT '买家ID',
  `seller_id`    BIGINT        NOT NULL COMMENT '卖家ID',
  `product_id`   BIGINT        NOT NULL COMMENT '商品ID',
  `price`        DECIMAL(10,2) NOT NULL COMMENT '成交价',
  `trade_type`   VARCHAR(10)   DEFAULT '自提' COMMENT '交易方式：自提/面交',
  `trade_place`  VARCHAR(100)  DEFAULT '' COMMENT '取货地点',
  `status`       TINYINT       NOT NULL DEFAULT 0 COMMENT '0=待发货 1=已发货 2=已完成 3=已取消',
  `created_at`   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '下单时间',
  `pay_time`     DATETIME      DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_order_no` (`order_no`),
  KEY `idx_buyer` (`buyer_id`),
  KEY `idx_seller` (`seller_id`),
  KEY `idx_product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='订单表';

-- ------------------------------------------------------------
-- 5. 通知表（审核结果 / 订单消息 / 系统通知）
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `notification`;
CREATE TABLE `notification` (
  `id`          BIGINT       NOT NULL AUTO_INCREMENT,
  `user_id`     BIGINT       NOT NULL COMMENT '接收者ID',
  `type`        VARCHAR(20)  NOT NULL DEFAULT 'system' COMMENT 'approve/reject/order/system',
  `title`       VARCHAR(100) NOT NULL COMMENT '通知标题',
  `content`     VARCHAR(500) NOT NULL COMMENT '通知内容',
  `related_id`  BIGINT       DEFAULT NULL COMMENT '关联ID(商品/订单)',
  `is_read`     TINYINT      NOT NULL DEFAULT 0 COMMENT '0=未读 1=已读',
  `created_at`  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_user_read` (`user_id`, `is_read`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='通知表';

-- ------------------------------------------------------------
-- 6. 收藏表
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `favorite`;
CREATE TABLE `favorite` (
  `id`         BIGINT NOT NULL AUTO_INCREMENT,
  `user_id`    BIGINT NOT NULL,
  `product_id` BIGINT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_user_product` (`user_id`, `product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='收藏表';

-- ------------------------------------------------------------
-- 7. 社区帖子表（发现页）
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `id`         BIGINT       NOT NULL AUTO_INCREMENT,
  `user_id`    BIGINT       NOT NULL COMMENT '发帖人ID',
  `content`    TEXT         NOT NULL COMMENT '帖子内容',
  `category`   VARCHAR(20)  DEFAULT '日常' COMMENT '帖子分类',
  `price`      DECIMAL(10,2) DEFAULT NULL COMMENT '关联价格',
  `like_count` INT          NOT NULL DEFAULT 0 COMMENT '点赞数',
  `comment_count` INT       NOT NULL DEFAULT 0 COMMENT '评论数',
  `created_at` DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='社区帖子表';

-- ------------------------------------------------------------
-- 8. 帖子图片表
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `post_image`;
CREATE TABLE `post_image` (
  `id`      BIGINT NOT NULL AUTO_INCREMENT,
  `post_id` BIGINT NOT NULL,
  `image_url` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_post` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='帖子图片表';

-- ------------------------------------------------------------
-- 初始化数据：一个普通用户 + 一个审核员
-- 默认密码均为 123456（bcrypt 加密）
-- ------------------------------------------------------------
INSERT INTO `user` (`phone`,`password`,`nickname`,`avatar`,`college`,`role`) VALUES
('13800138000','$2a$10$wKfQs8mJ5bqZq3t7vN1pUuY3cG8rQh2xL6pN4sF9eWd0aIbXcM7K2','林晓晴','','商务经济学院',0),
('13900139000','$2a$10$wKfQs8mJ5bqZq3t7vN1pUuY3cG8rQh2xL6pN4sF9eWd0aIbXcM7K2','平台审核员','','平台管理',1);
