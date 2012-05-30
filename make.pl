#!/usr/bin/perl

for my $x (1..13) {
    my $shift = -1200 + $x * 100;
    system "sox meow.wav meow$x.wav pitch $shift\n";
}
