<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit6bf72221e4591b05d827e9d5221d3387
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit6bf72221e4591b05d827e9d5221d3387', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit6bf72221e4591b05d827e9d5221d3387', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit6bf72221e4591b05d827e9d5221d3387::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
