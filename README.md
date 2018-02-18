# 

[![Latest Version on Packagist][ico-version]][link-packagist]
[![Software License][ico-license]](LICENSE.md)
[![Build Status][ico-travis]][link-travis]
[![Coverage Status][ico-scrutinizer]][link-scrutinizer]
[![Quality Score][ico-code-quality]][link-code-quality]
[![Total Downloads][ico-downloads]][link-downloads]

Repository for testing tools and small applications

## Structure

```
bin/        
config/
src/
tests/
vendor/
```


## Install

Via Composer

``` bash
$ composer require renatosoares/playground
```

## Usage

``` php
$skeleton = new playground\();
echo $skeleton->echoPhrase('Hello, League!');
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Testing

``` bash
$ composer test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) for details.

## Security

If you discover any security related issues, please email renatosoares@example.com instead of using the issue tracker.

## Credits

- [Renato Soares][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/renatosoares/.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/renatosoares//master.svg?style=flat-square
[ico-scrutinizer]: https://img.shields.io/scrutinizer/coverage/g/renatosoares/.svg?style=flat-square
[ico-code-quality]: https://img.shields.io/scrutinizer/g/renatosoares/.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/renatosoares/.svg?style=flat-square

[link-packagist]: https://packagist.org/packages/renatosoares/
[link-travis]: https://travis-ci.org/renatosoares/
[link-scrutinizer]: https://scrutinizer-ci.com/g/renatosoares//code-structure
[link-code-quality]: https://scrutinizer-ci.com/g/renatosoares/
[link-downloads]: https://packagist.org/packages/renatosoares/
[link-author]: https://github.com/renatosoares
[link-contributors]: ../../contributors
