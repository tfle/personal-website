source "https://rubygems.org"

# Add just-the-docs gem for theming
# Use the latest pre-release instead of the latest release
gem "just-the-docs", "0.4.0.rc3"
# gem "just-the-docs"

# Add github-pages gem which automatically installs the correct Jekyll version
# Run `bundle update github-pages` to upgrade
gem "github-pages", "~> 227", group: :jekyll_plugins
# gem "jekyll", "~> 4.3.1"

gem "webrick" # required when using Ruby >= 3 and Jekyll <= 4.2.2

# If you have any plugins, put them here!
group :jekyll_plugins do
  # gem "jekyll-feed", "~> 0.6"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
