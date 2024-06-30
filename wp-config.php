<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '5i-9Udm~&|Q2#4q3_b4jO~rAz7XgA(5OX0:!?fVHLSk-SV]y,pMQK3(]n;uS!:K)' );
define( 'SECURE_AUTH_KEY',  'G07R*(R6qbO2MXa5VcK}3%KX(S@w4dIo+4:[YCb&vK2<WjB$]tpZ#i)qz)5`fxMM' );
define( 'LOGGED_IN_KEY',    'F?uvn56fIze2[#L_382o{$0j_4R,x3;Owh1@)wp62%GoQ:Jc%PZxX@]L${#c3-:w' );
define( 'NONCE_KEY',        'r]Av<T`25Z@v#.Z}&`hO}@3{QK&b.(y?lw2GjYNS7_-sa_YLqdG g2h[-a(H589^' );
define( 'AUTH_SALT',        'r4%| GObPHvRea1?E~8#4|kCW|Bw/VXMSnJ{ud^8IrcBHSK{Y-|u(UfnFoM,t-`2' );
define( 'SECURE_AUTH_SALT', '8jc(r/0Mym}Z87PzH0?B#8/vz+&r4M[LtO[(qMpK)qV{o=b?AZ.]cW3G0?,m4ol)' );
define( 'LOGGED_IN_SALT',   'Xzp.[;Z!idWwp2YNCry3>9WD[v IsM7!P|G|#Ggw&-pi;ox*R<=M;)1Fyr!>i}(n' );
define( 'NONCE_SALT',       'EgOB^l#89DGF44*RzglfWXPu&x]VKoy@{SyoE|tzKq9<:sN.f{?~3F8-(v?Zrwwu' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
