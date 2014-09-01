#!/usr/bin/env ruby

module_filenames =
  Dir.glob("eigensheep/*.js").map{
    |filename| filename.gsub('eigensheep/', '').gsub('.js', '')
  } - ['r']

def to_camel_case(str)
  capitalized_camel_case = str.split('_').collect(&:capitalize).join

  if capitalized_camel_case.length <= 1
    capitalized_camel_case
  else
    capitalized_camel_case[0].downcase + capitalized_camel_case[1..-1]
  end
end

class RamdaModule
  attr_reader :filename, :property_name

  def initialize(filename)
    @filename      = filename
    @property_name = to_camel_case(filename)
  end
end

ramda_modules = module_filenames.map{ |name| RamdaModule.new(name) }

ramda_modules.each do |ramda_module|
  puts %Q[import #{ramda_module.property_name} from "./#{ramda_module.filename}";]
end
puts ""
puts "var R = {"
puts ramda_modules.map { |ramda_module|
  %Q[    #{ramda_module.property_name}: #{ramda_module.property_name}]
}.join(",\n")
puts "};"
puts ""
puts "export default R;"
