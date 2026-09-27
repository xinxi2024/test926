-- ============================================================
-- 上商淘 · 好友与私信模块（增量）
-- 包含：好友申请表 / 好友关系表 / 私信表
-- ============================================================
SET NAMES utf8mb4;
USE shangtao;

-- 1. 好友申请
DROP TABLE IF EXISTS `friend_request`;
CREATE TABLE `friend_request` (
  `id`           BIGINT       NOT NULL AUTO_INCREMENT,
  `from_user_id` BIGINT       NOT NULL COMMENT '申请人ID',
  `to_user_id`   BIGINT       NOT NULL COMMENT '被申请人ID',
  `message`      VARCHAR(100) NOT NULL DEFAULT '' COMMENT '申请留言',
  `status`       TINYINT      NOT NULL DEFAULT 0 COMMENT '0=待处理 1=已接受 2=已拒绝',
  `created_at`   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `handled_at`   DATETIME     DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_to_status` (`to_user_id`, `status`),
  KEY `idx_from` (`from_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='好友申请表';

-- 2. 好友关系（接受申请时写入双向两条记录）
DROP TABLE IF EXISTS `friend`;
CREATE TABLE `friend` (
  `id`         BIGINT   NOT NULL AUTO_INCREMENT,
  `user_id`    BIGINT   NOT NULL COMMENT '用户ID',
  `friend_id`  BIGINT   NOT NULL COMMENT '好友ID',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_user_friend` (`user_id`, `friend_id`),
  KEY `idx_friend` (`friend_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='好友关系表';

-- 3. 私信
DROP TABLE IF EXISTS `private_message`;
CREATE TABLE `private_message` (
  `id`          BIGINT        NOT NULL AUTO_INCREMENT,
  `sender_id`   BIGINT        NOT NULL COMMENT '发送者ID',
  `receiver_id` BIGINT        NOT NULL COMMENT '接收者ID',
  `content`     VARCHAR(1000) NOT NULL COMMENT '消息内容',
  `is_read`     TINYINT      NOT NULL DEFAULT 0 COMMENT '0=未读 1=已读',
  `created_at`  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_pair_time` (`sender_id`, `receiver_id`, `created_at`),
  KEY `idx_receiver_read` (`receiver_id`, `is_read`),
  KEY `idx_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='私信表';
