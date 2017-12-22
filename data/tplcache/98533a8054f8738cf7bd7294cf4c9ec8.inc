<ul>
		{dede:channelartlist typeid='top' row='8'}
		<li class='strong'><a href='{dede:field name='typeurl'/}'>{dede:field name='typename' /}</a></li>
        {dede:channel type='son' noself='yes'}
		<li><a href='[field:typelink/]'>[field:typename/]</a></li>
		{/dede:channel}
      </ul>