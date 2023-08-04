from setuptools import setup

setup(
    name='env_minion',
    version='0.0.1',
    description='Enforces environmental variable conformance with template shared across team',
    url='https://github.com/NikaEco/env-minion',
    author='Nisemono',
    include_package_data=True,
    entry_points={
        'console_scripts': [
            'gru = env_minion.hook_factory:create_all_hooks',
        ]
    }
)